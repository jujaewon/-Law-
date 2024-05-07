package com.hellolaw.hellolaw.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hellolaw.hellolaw.service.LawService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/law")
@RequiredArgsConstructor
public class LawController {

	private final LawService lawService;

	@GetMapping("/detail")
	public ResponseEntity<?> getLawDetail(@RequestParam(value = "name") String lawName) {
		return ResponseEntity.ok(lawService.getLawDetail(lawName));
	}

	@GetMapping("/ranking")
	public ResponseEntity<?> getLawRanking() {
		Long memberId = 100L;
		return ResponseEntity.ok(lawService.getLawRanking(memberId));
	}
}
