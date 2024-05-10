package com.hellolaw.hellolaw.service;

import com.hellolaw.hellolaw.dto.QuestionAnswerResponse;
import com.hellolaw.hellolaw.dto.QuestionHistoryResponse;
import com.hellolaw.hellolaw.dto.QuestionRequest;

import java.util.List;

public interface QuestionService {
	List<QuestionHistoryResponse> getTwoQuestionHistoryList(Long userId);
	QuestionAnswerResponse generateAnswer(QuestionRequest questionRequest);

	Void deleteQuestion(Long userId, Long questionId);
}
