package com.hellolaw.auth.handler;

import java.nio.charset.StandardCharsets;
import java.time.Duration;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.server.WebFilterExchange;
import org.springframework.security.web.server.authentication.RedirectServerAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import com.hellolaw.auth.dto.internal.GeneratedToken;
import com.hellolaw.auth.util.JWTProvider;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

@Slf4j
@Component
@RequiredArgsConstructor
public class CustomOAuth2SuccessHandler extends RedirectServerAuthenticationSuccessHandler {
	private final JWTProvider jwtProvider;
	private final UserRepository userRepository;

	@Override
	public Mono<Void> onAuthenticationSuccess(WebFilterExchange webFilterExchange, Authentication authentication) {
		log.info("hi");
		OAuth2User oAuth2User = (OAuth2User)authentication.getPrincipal();
		String email = oAuth2User.getAttribute("email");
		OAuth2AuthenticationToken oAuth2AuthenticationToken = (OAuth2AuthenticationToken)authentication;

		log.info(email);
		log.info(oAuth2AuthenticationToken.getAuthorizedClientRegistrationId());

		Mono<GeneratedToken> monoGeneratedToken = generateTokenByEmail(email,
			oAuth2AuthenticationToken.getAuthorizedClientRegistrationId());

		monoGeneratedToken.subscribe(generatedToken -> log.info(generatedToken.toString()));

		return monoGeneratedToken.flatMap(generatedToken ->
			handleTokens(webFilterExchange.getExchange().getResponse(), generatedToken.getAccessToken(),
				generatedToken.getRefreshToken()));
	}

	public Mono<Void> handleTokens(ServerHttpResponse response, String accessToken, String refreshToken) {
		// 로그 출력
		log.info("accessToken = {}", accessToken);

		ResponseCookie accessTokenCookie = ResponseCookie.from("access-token", accessToken)
			.path("/")
			.secure(true)
			.maxAge(Duration.ofMillis(60 * 60 * 24 * 30))
			.httpOnly(true)
			.build();

		// 새로운 refreshToken 생성
		ResponseCookie refreshTokenCookie = ResponseCookie.from("refreshToken", refreshToken)
			.maxAge(Duration.ofDays(30)) // 예시로 30일 유지
			.secure(true)
			.httpOnly(true)
			.path("/")
			.build();

		// response에 refreshToken 쿠키 추가
		response.addCookie(accessTokenCookie);
		response.addCookie(refreshTokenCookie);

		// 리프레시 토큰 레디스에 저장 (비동기로 실행됨)
		return Mono.fromRunnable(() -> {
				log.info("hi");
				// refreshTokenRepository.save(new RefreshToken(refreshToken));
			}).subscribeOn(Schedulers.boundedElastic())
			.then(Mono.defer(() -> {
				// 리다이렉트할 URL 생성
				String targetUrl = UriComponentsBuilder.fromUriString(
						"http://localhost:8080")
					.build()
					.encode(StandardCharsets.UTF_8)
					.toUriString();

				// 리다이렉트
				response.getHeaders().set(HttpHeaders.LOCATION, targetUrl);
				response.getHeaders().add(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken);
				response.setStatusCode(HttpStatus.FOUND);
				return response.setComplete();
			}));
	}

	public Mono<GeneratedToken> generateTokenByEmail(String email, String registrationId) {
		return getUserIdByEmail(email)
			.flatMap(userId -> {
				// userId를 이용하여 토큰을 생성하고 Mono<GeneratedToken>을 반환
				return Mono.just(jwtProvider.generatedToken(userId, registrationId));
			});
	}

	public Mono<Long> getUserIdByEmail(String email) {
		return userRepository.findByEmail(email)
			.map(User::getId)
			.switchIfEmpty(Mono.error(new RuntimeException("User not found"))); // 사용자를 찾지 못한 경우 예외 발생
	}
}
