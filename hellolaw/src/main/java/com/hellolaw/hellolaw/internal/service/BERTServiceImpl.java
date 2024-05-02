package com.hellolaw.hellolaw.internal.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.hellolaw.hellolaw.internal.dto.PrecedentDto;

@Service
public class BERTServiceImpl implements BERTService {

	@Value("${hellolaw.ai.url}")
	private String AIUrl;

	public PrecedentDto getSimilarPrecedent(String question) {
		return RestClient.create().get()
			.uri(AIUrl)
			.retrieve()
			.body(PrecedentDto.class);
	}
}
