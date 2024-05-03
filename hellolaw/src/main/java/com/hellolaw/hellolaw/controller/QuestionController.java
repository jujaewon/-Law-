package com.hellolaw.hellolaw.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hellolaw.hellolaw.dto.QuestionRequest;
import com.hellolaw.hellolaw.internal.service.BERTService;
import com.hellolaw.hellolaw.internal.service.BERTServiceMockImpl;
import com.hellolaw.hellolaw.service.QuestionService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/question")
@RequiredArgsConstructor
public class QuestionController {

	private final BERTService bertService = new BERTServiceMockImpl();
	private final QuestionService questionService;

	@GetMapping("/v1")
	public void questionHelloV1() {
		log.info(bertService.getSimilarPrecedent("test").toString());

		return;
	}

	@PostMapping
	public ResponseEntity<?> generateAnswer(@RequestBody QuestionRequest questionRequest) {
		return ResponseEntity.ok(questionService.generateAnswer(questionRequest));
	}
}
