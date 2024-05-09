package com.hellolaw.hellolaw.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.hellolaw.hellolaw.service.SseServiceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/law/subscribe")
public class SseController {

	private final SseServiceImpl sseService;
	private final static Long memberId = 100L;

	//@GetMapping(value = "End Point", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	@GetMapping
	public SseEmitter subscribe() {
		// memberId 가져오기
		return sseService.subscribe(memberId);
	}

}
