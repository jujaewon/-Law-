package com.hellolaw.hellolaw.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hellolaw.hellolaw.internal.service.BERTService;
import com.hellolaw.hellolaw.internal.service.BERTServiceMockImpl;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/question")
public class QuestionController {
	private final BERTService bertService;

	public QuestionController(BERTServiceMockImpl bertService) {
		this.bertService = bertService;
	}

	@GetMapping("/v1")
	public void questionHelloV1() {
		log.info(bertService.getSimilarPrecedent("test").toString());

		return;
	}
}
