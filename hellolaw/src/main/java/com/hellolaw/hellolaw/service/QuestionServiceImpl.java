package com.hellolaw.hellolaw.service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.hellolaw.hellolaw.dto.QuestionAnswerResponse;
import com.hellolaw.hellolaw.dto.QuestionHistoryResponse;
import com.hellolaw.hellolaw.dto.QuestionRequest;
import com.hellolaw.hellolaw.entity.Law;
import com.hellolaw.hellolaw.entity.Question;
import com.hellolaw.hellolaw.internal.dto.LawInformationDto;
import com.hellolaw.hellolaw.internal.dto.PrecedentDto;
import com.hellolaw.hellolaw.internal.dto.PrecedentSummaryResponse;
import com.hellolaw.hellolaw.internal.service.BERTService;
import com.hellolaw.hellolaw.internal.service.LawInformationService;
import com.hellolaw.hellolaw.internal.service.OpenAiService;
import com.hellolaw.hellolaw.internal.service.SuggestionService;
import com.hellolaw.hellolaw.mapper.LawMapper;
import com.hellolaw.hellolaw.repository.LawRepository;
import com.hellolaw.hellolaw.repository.QuestionRepository;
import com.hellolaw.hellolaw.util.CategoryConstant;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@EnableAsync(proxyTargetClass = true)
public class QuestionServiceImpl implements QuestionService {

	private final QuestionRepository questionRepository;
	private final BERTService bertService;
	private final SuggestionService suggestionService;
	private final LawInformationService lawInformationService;
	private final OpenAiService openAiService;
	private final LawRepository lawRepository;
	private final LawMapper lawMapper = LawMapper.INSTANCE;

	@Override
	public List<QuestionHistoryResponse> getTwoQuestionHistoryList(Long userId) {
		List<Question> questions = questionRepository.findTop2ByUserIdOrderByCreatedAtDesc(userId);

		// TODO : 최근 2개의 질문 가져오기
		return questions.stream()
			.map(QuestionHistoryResponse::createQuestionHistoryResponse)
			.collect(Collectors.toList());
	}

	@Override
	public QuestionAnswerResponse generateAnswer(QuestionRequest questionRequest) throws JsonProcessingException {
		String question = makePrompt(questionRequest);

		String suggestion = suggestionService.getSuggestion(question).getText();
		PrecedentDto precedent = bertService.getSimilarPrecedent(questionRequest.getQuestion()); // 유사판례

		PrecedentSummaryResponse precedentSummary = openAiService.getBasicFactInformation(
			precedent.getDisposal_content(),
			precedent.getBasic_fact());

		List<String> list = precedent.getRelate_laword();
		list.forEach(lawName -> CompletableFuture.runAsync(() -> saveRelatedLaw(lawName)));

		return QuestionAnswerResponse.builder()
			.suggestion(suggestion)
			.category(CategoryConstant.getCategoryInKorean(precedentSummary.getCategory()))
			.precedentId(precedent.getIndex())
			.precedentSummary(precedentSummary.getSummary())
			.lawType(precedent.getCase_nm())
			.relatedLaws(precedent.getRelate_laword())
			.build();
	}

	private void saveRelatedLaw(String lawName) {
		Optional<Law> law = lawRepository.findByName(lawName);
		if (law.isEmpty()) {
			LawInformationDto lawInformationDto = lawInformationService.getLawInformation(lawName);
			Law newLaw = lawMapper.toLaw(lawInformationDto);
			lawRepository.save(newLaw);
		} else {
			Law newLaw = law.get();
			newLaw.setCount(newLaw.getCount() + 1);
			lawRepository.save(newLaw);
		}
	}

	@Override
	@Transactional
	public Void deleteQuestion(Long userId, Long questionId) {
		Question question = questionRepository.findQuestionByUserIdAndQuestionId(userId, questionId).orElseThrow();
		questionRepository.delete(question);
		return null;
	}

	private String makePrompt(QuestionRequest questionRequest) {
		String question = questionRequest.getQuestion();
		if (questionRequest.getVictim() != null) {
			question = "i am " + (questionRequest.getVictim() ? "피해자" : "가해자") + "\n" + question;
		}
		if (questionRequest.getCategory() != null) {
			question = "this is about " + questionRequest.getCategory() + "\n" + question;
		}
		return question;
	}
}
