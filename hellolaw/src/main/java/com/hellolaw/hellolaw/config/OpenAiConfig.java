package com.hellolaw.hellolaw.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class OpenAiConfig {

	@Value("${openai.api.secret-key}")
	private String secretKey;

	private final String AuthorizationHeader = "Authorization";
	private final String tokenPrefix = "Bearer ";

	@Bean
	public RestTemplate restTemplate() {
		RestTemplate restTemplate = new RestTemplate();
		restTemplate.getInterceptors().add((request, body, execution) -> {
			request.getHeaders().add(AuthorizationHeader, tokenPrefix + secretKey);
			return execution.execute(request, body);
		});
		return restTemplate;
	}
}
