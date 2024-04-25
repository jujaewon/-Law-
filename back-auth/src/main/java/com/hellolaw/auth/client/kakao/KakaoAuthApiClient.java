package com.hellolaw.auth.client.kakao;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.client.RestClient;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import com.hellolaw.auth.dto.KakaoTokenResponse;
import com.hellolaw.auth.dto.KakaoUserInfoResponse;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class KakaoAuthApiClient {

	@Value("${kakao.admin-key}")
	private String SERVICE_APP_ADMIN_KEY;

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
			.block()
			.getAccess_token();
	}

	public String logoutKakao(MultiValueMap<String, String> formData) {
		return String.valueOf(WebClient.create()
			.post()
			.uri("https://kapi.kakao.com/v1/user/logout")
			.header("Authorization", String.format("KakaoAK {}", SERVICE_APP_ADMIN_KEY))
			.body(BodyInserters.fromFormData(formData))
			.retrieve()
			.bodyToMono(Long.class)
			.block());
	}

	public KakaoUserInfoResponse getUserInfo(String token) {
		return RestClient.create()
			.post()
			.uri("https://kapi.kakao.com/v2/user/me")
			.header("Authorization", token)
			.header("Content-type", "application/x-www-form-urlencoded;charset=utf-8")
			.retrieve()
			.body(KakaoUserInfoResponse.class);
	}
}