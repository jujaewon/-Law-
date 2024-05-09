package com.hellolaw.hellolaw.service;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import com.hellolaw.hellolaw.dto.QuestionHistoryResponse;
import lombok.extern.slf4j.Slf4j;
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

@Slf4j
@Service
@RequiredArgsConstructor
@EnableAsync(proxyTargetClass = true)
public class QuestionServiceImpl implements QuestionService {

	private final QuestionRepository questionRepository;
	private final BERTService bertService = new BERTServiceMockImpl(); // TODO : MOCK 삭제
	private final LawInformationService lawInformationService;
	private final OpenAiService openAiService;
	private final LawRepository lawRepository;
	private final LawMapper lawMapper;

	@Override
	public List<QuestionHistoryResponse> getTwoQuestionHistoryList(Long userId) {
		List<Question> questions = questionRepository.findTop2ByUserIdOrderByCreatedAtDesc(userId);

		// TODO : 최근 2개의 질문 가져오기
		return questions.stream()
				.map(QuestionHistoryResponse::createQuestionHistoryResponse)
				.collect(Collectors.toList());
	}
	@Override
	public QuestionAnswerResponse generateAnswer(QuestionRequest questionRequest) {
		String question = questionRequest.getQuestion();
		if (questionRequest.getVictim() != null) {
			question = "i am " + questionRequest.getVictim() + "\n" + question;
		}
		if (questionRequest.getCategory() != null) {
			question = "this is about " + questionRequest.getCategory() + "\n" + question;
		}

		String suggestion = getSuggestion(question);
		PrecedentDto precedent = bertService.getSimilarPrecedent(questionRequest.getQuestion()).join();

		//판례 요약하고 카테고리 뽑아오기
		PredecentSummaryResponse predecentSummary = openAiService.getBasicFactInformation(
			precedent.getDisposal_content(),
			precedent.getBasic_fact());

		// 관련 법안 0~3개에 대해 저장
		List<String> list = precedent.getRelatedLaws();
		list.forEach(lawName -> CompletableFuture.runAsync(() -> saveRelatedLaw(lawName)));

		return QuestionAnswerResponse.builder()
			.suggestion(suggestion)
			.precedentId(precedent.getIndex())
			.precedentSummary(predecentSummary.getSummary())
			.lawType(precedent.getCase_nm())
			.category(CategoryConstant.getCategoryInKorean(predecentSummary.getCategory()))
			.relatedLaws(precedent.getRelate_laword())
			.build();
	}

	public void saveRelatedLaw(String lawName) {
		if (lawRepository.findByName(lawName).isEmpty()) {
			LawInformationDto lawInformationDto = lawInformationService.getLawInformation(lawName).join();
			Law law = lawMapper.toLaw(lawInformationDto);
			lawRepository.save(law);
		}
	}

	@Async
	protected String getSuggestion(String question) { // TODO : method 구현
		return "이렇게 해보세용";
	}

	@Override
	@Transactional
	public Void deleteQuestion(Long userId, Long questionId) {
		Question question = questionRepository.findQuestionByUserIdAndQuestionId(userId, questionId).orElseThrow();
		questionRepository.delete(question);
		return null;
	}
}
