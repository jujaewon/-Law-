package com.hellolaw.hellolaw.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.hellolaw.hellolaw.annotation.UserId;

@RestController
public class TestController {
	@GetMapping("/test")
	public String test(
		@RequestHeader(value = "authorization") Long userId
	) {
		return "Hello, " + userId;
	}
}
