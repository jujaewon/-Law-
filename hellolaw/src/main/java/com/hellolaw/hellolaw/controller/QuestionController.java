package com.hellolaw.hellolaw.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hellolaw.hellolaw.common.ApiResponse;
import com.hellolaw.hellolaw.dto.QuestionAnswerResponse;
import com.hellolaw.hellolaw.dto.QuestionRequest;
import com.hellolaw.hellolaw.internal.service.BERTService;
import com.hellolaw.hellolaw.internal.service.BERTServiceMockImpl;
import com.hellolaw.hellolaw.service.QuestionService;
import com.hellolaw.hellolaw.service.QuestionServiceImpl;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/question")
public class QuestionController {
	private final BERTService bertService;
	private final QuestionService questionService;

	public QuestionController(BERTServiceMockImpl bertService, QuestionServiceImpl questionService) {
		this.questionService = questionService;
		this.bertService = bertService;
	}

	@GetMapping("/v1")
	public void questionHelloV1() {
		log.info(bertService.getSimilarPrecedent("test").toString());

		return;
	}

	@PostMapping
	public ResponseEntity<QuestionAnswerResponse> generateAnswer(@RequestBody QuestionRequest questionRequest) {
		return ResponseEntity.ok(questionService.generateAnswer(questionRequest));
	}

	@DeleteMapping("/v1")
	public ResponseEntity<ApiResponse<Void>> deleteQuestion(
		@RequestParam(value = "questionId") Long questionId) {
		return ResponseEntity.ok(ApiResponse.success(questionService.deleteQuestion(1L, questionId)));
	}
}
