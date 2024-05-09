package com.hellolaw.hellolaw.service;

import com.hellolaw.hellolaw.dto.QuestionAnswerResponse;
import com.hellolaw.hellolaw.dto.QuestionRequest;

import com.hellolaw.hellolaw.dto.QuestionResultDetailResponse;

public interface QuestionService {

	QuestionAnswerResponse generateAnswer(QuestionRequest questionRequest);

	Void deleteQuestion(Long userId, Long questionId);

	QuestionResultDetailResponse getQuestionResultDetail(Long userId, Long questionId);
}
