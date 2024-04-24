package com.hellolaw.auth.client.kakao;

import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.client.RestClient;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.hellolaw.auth.dto.KakaoTokenResponse;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class KakaoAuthApiClient {

	public KakaoProfileResponse getProfileInfo(@RequestHeader("Authorization") String accessToken) {
		return RestClient.create()
			.get()
			.uri("https://kapi.kakao.com/v2/user/me")
			.header("Authorization", accessToken)
			.retrieve()
			.body(KakaoProfileResponse.class);
	}

	public String getAccessToken(MultiValueMap<String, String> formData) {
		return WebClient.create()
			.post()
			.uri("https://kauth.kakao.com/oauth/token")
			.header("Content-type", "application/x--form-urlencoded;charset=utf-8")
			.body(BodyInserters.fromFormData(formData))
			.retrieve()
			.bodyToMono(KakaoTokenResponse.class)
			.block().getAccess_token();
	}
}