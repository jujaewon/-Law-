package com.hellolaw.hellolaw.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hellolaw.hellolaw.dto.QuestionAnswerResponse;
import com.hellolaw.hellolaw.dto.QuestionRequest;
import com.hellolaw.hellolaw.entity.Law;
import com.hellolaw.hellolaw.entity.Question;
import com.hellolaw.hellolaw.internal.dto.LawInformationDto;
import com.hellolaw.hellolaw.internal.dto.PrecedentDto;
import com.hellolaw.hellolaw.internal.dto.PredecentSummaryResponse;
import com.hellolaw.hellolaw.internal.service.BERTService;
import com.hellolaw.hellolaw.internal.service.BERTServiceMockImpl;
import com.hellolaw.hellolaw.internal.service.LawInformationService;
import com.hellolaw.hellolaw.internal.service.OpenAiService;
import com.hellolaw.hellolaw.mapper.LawMapper;
import com.hellolaw.hellolaw.repository.LawRepository;
import com.hellolaw.hellolaw.repository.QuestionRepository;
import com.hellolaw.hellolaw.util.CategoryConstant;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
	private final QuestionRepository questionRepository;

	@Override
	public Void deleteQuestion(Long userId, Long questionId) {
		Question question = questionRepository.findQuestionByUserIdAndQuestionId(userId, questionId).orElseThrow();
		questionRepository.delete(question);
		return null;
	}

	private final BERTService bertService = new BERTServiceMockImpl(); // TODO : MOCK 삭제
	private final LawInformationService lawInformationService;
	private final OpenAiService openAiService;
	private final LawRepository lawRepository;
	private final LawMapper lawMapper;

	@Override
	public QuestionAnswerResponse generateAnswer(QuestionRequest questionRequest) {
		// TODO : 대처방안
		String suggestion = "이렇게 해보세용";

		// 유사판례
		PrecedentDto precedent = bertService.getSimilarPrecedent(questionRequest.getQuestion());

		//판례 요약하고 카테고리 뽑아오기
		PredecentSummaryResponse predecentSummary = openAiService.getBasicFactInformation(
			precedent.getDisposal_content(),
			precedent.getBasic_fact());

		// 관련 법안 0~3개에 대해 저장
		List<String> list = precedent.getRelate_laword();
		list.forEach(lawName -> {
			saveRelatedLaw(lawName);
		});

		return QuestionAnswerResponse.builder()
			.suggestion(suggestion)
			.precedentId(precedent.getIndex())
			.precedentSummary(predecentSummary.getSummary())
			.lawType(precedent.getCase_nm())
			.category(CategoryConstant.getCategoryInKorean(predecentSummary.getCategory()))
			.relatedLaws(precedent.getRelate_laword())
			.build();
	}

	private Law saveRelatedLaw(String lawName) {
		Optional<Law> law = lawRepository.findByName(lawName);
		if (lawRepository.findByName(lawName).isEmpty()) {
			LawInformationDto lawInformationDto = lawInformationService.getLawInformation(lawName);
			Law newLaw = lawMapper.toLaw(lawInformationDto);
			return lawRepository.save(newLaw);
		} else {
			return law.orElse(null);
		}
	}
}
