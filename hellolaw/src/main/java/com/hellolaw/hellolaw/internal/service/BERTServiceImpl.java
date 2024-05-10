package com.hellolaw.hellolaw.internal.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.hellolaw.hellolaw.internal.dto.PrecedentDto;

import reactor.core.publisher.Mono;

@Service
public class BERTServiceImpl implements BERTService {

	@Value("${hellolaw.ai.url}")
	private String AIUrl;

	public PrecedentDto getSimilarPrecedent(String text) {
		String questionJson = "{\n" +
			"    \"text\": \"" + text + "\"\n" +
			"}";

		Mono<PrecedentDto> response = WebClient.create(AIUrl).post()
			.uri("/search/")
			.header("Content-Type", "application/json")
			.body(Mono.just(questionJson), String.class)
			.retrieve()
			.bodyToMono(PrecedentDto.class);

		PrecedentDto result = response.block();
		result.setIndex(result.getIndex() + 1);
		return result;
	}
}
