package com.hellolaw.auth.service;

import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.hellolaw.auth.dto.TokenResponse;
import com.hellolaw.auth.dto.UserInfoResponse;
import com.hellolaw.auth.entity.SocialProvider;
import com.hellolaw.auth.entity.User;
import com.hellolaw.auth.provider.AuthProvider;
import com.hellolaw.auth.redis.RedisService;
import com.hellolaw.auth.repository.SocialProviderRepository;
import com.hellolaw.auth.repository.UserRepository;
import com.hellolaw.auth.util.JWTProvider;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final JWTProvider jwtProvider;
	private final RedisService redisService;
	private final SocialProviderRepository socialProviderRepository;
	private final AuthService authService;

	private void createUser(String socialId, String nickName) {
		User user = User.builder()
			.nickname(nickName)
			.build();
		SocialProvider socialProvider = SocialProvider.builder()
			.socialId(socialId)
			.provider("카카오")
			.user(user)
			.build();

		userRepository.save(user);
		socialProviderRepository.save(socialProvider);

		String collectionsKey = "userId:" + user.getId() + ":collections";
		redisService.setValueForSet(collectionsKey, "1");
	}

	@Override
	public TokenResponse login(UserInfoResponse userInfoResponse, AuthProvider authProvider) {

		// 첫 회원가입
		if (socialProviderRepository.findSocialProviderBySocialId(
			userInfoResponse.getId()).isEmpty()) {
			createUser(userInfoResponse.getId(), userInfoResponse.getNickname());
		}

		SocialProvider socialProvider = socialProviderRepository.findSocialProviderBySocialId(
			userInfoResponse.getId()).orElseThrow();
		Long id = userRepository.findById(socialProvider.getUser().getId()).orElseThrow().getId();

		// jwt 발급
		String accessToken = jwtProvider.createAccessToken(id);
		String refreshToken = jwtProvider.createRefreshToken(id);

		// redis에 refresh token 저장
		authService.saveRefreshToken(accessToken, refreshToken);

		return new TokenResponse(accessToken, refreshToken);
	}

	@Override
	public void logout(Long principal, AuthProvider authProvider) {
		redisService.deleteValues("RT:".concat(String.valueOf(principal)));
		MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
		formData.add("target_id_type", "user_id");
		formData.add("target_id", String.valueOf(principal));
		authProvider.logout(formData);
	}
}