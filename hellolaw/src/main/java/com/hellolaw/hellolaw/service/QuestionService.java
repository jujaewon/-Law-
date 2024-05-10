package com.hellolaw.hellolaw.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.hellolaw.hellolaw.dto.QuestionAnswerResponse;
import com.hellolaw.hellolaw.dto.QuestionHistoryResponse;
import com.hellolaw.hellolaw.dto.QuestionRequest;

import java.util.List;

public interface QuestionService {

	QuestionAnswerResponse generateAnswer(QuestionRequest questionRequest) throws JsonProcessingException;

	List<QuestionHistoryResponse> getTwoQuestionHistoryList(Long userId);

	Void deleteQuestion(Long userId, Long questionId);
}
