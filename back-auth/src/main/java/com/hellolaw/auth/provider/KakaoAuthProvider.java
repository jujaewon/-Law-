package com.hellolaw.auth.provider;

import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;

import com.hellolaw.auth.client.kakao.KakaoAuthApiClient;
import com.hellolaw.auth.client.kakao.KakaoProfileResponse;
import com.hellolaw.auth.dto.KakaoUserInfoResponse;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class KakaoAuthProvider implements AuthProvider {
	private final KakaoAuthApiClient kakaoAuthApiClient;

	@Override
	public String getAccessToken(MultiValueMap<String, String> formData) {
		return kakaoAuthApiClient.getAccessToken(formData);
	}

	@Override
	public String getSocialId(String token) {
		KakaoProfileResponse response = kakaoAuthApiClient.getProfileInfo("Bearer " + token);
		return response.getId();
	}

	@Override
	public KakaoUserInfoResponse getUserInfo(String accessToken) {
		return RestClient.create()
			.post()
			.uri("https://kapi.kakao.com/v2/user/me")
			.header("Authorization", "Bearer " + accessToken)
			.header("Content-type", "application/x-www-form-urlencoded;charset=utf-8")
			.retrieve()
			.body(KakaoUserInfoResponse.class);
	}
}