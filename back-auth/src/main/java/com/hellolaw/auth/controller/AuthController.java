package com.hellolaw.auth.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hellolaw.auth.dto.ApiResponse;
import com.hellolaw.auth.dto.TokenResponse;
import com.hellolaw.auth.dto.UserInfoResponse;
import com.hellolaw.auth.provider.AuthProvider;
import com.hellolaw.auth.provider.AuthProviderFinder;
import com.hellolaw.auth.service.AuthService;
import com.hellolaw.auth.service.UserService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
public class AuthController {

	private final AuthService authService;
	private final UserService userService;
	private final AuthProviderFinder authProviderFinder;

	@Value("")
	private String OAuthRedirectURL;

	@GetMapping("/login/oauth2/code/kakao")
	ResponseEntity<ApiResponse<Void>> kakaoLogin(
		@RequestParam("code") String code,
		HttpServletResponse response) throws IOException {
		AuthProvider authProvider = authProviderFinder.findAuthProvider("카카오");
		return login(code, response, authProvider);
	}

	@GetMapping("/login/oauth2/code/google")
	ResponseEntity<ApiResponse<Void>> googleLogin(
		@RequestParam("code") String code,
		HttpServletResponse response) throws IOException {
		AuthProvider authProvider = authProviderFinder.findAuthProvider("구글");
		return login(code, response, authProvider);
	}

	private ResponseEntity<ApiResponse<Void>> login(String code, HttpServletResponse response,
		AuthProvider authProvider) throws IOException {
		String accessToken = authService.getAccessToken(code, authProvider);
		UserInfoResponse userInfo = authService.getUserInfo(accessToken, authProvider);
		TokenResponse tokenResponse = userService.login(userInfo, authProvider);

		Cookie cookie = new Cookie("access-token", tokenResponse.getAccess_token());
		cookie.setHttpOnly(true);
		cookie.setMaxAge(60 * 60 * 24 * 30);
		cookie.setPath("/");
		response.addCookie(cookie);

		// todo 메인페이지로 변경
		response.sendRedirect(OAuthRedirectURL);
		return ResponseEntity.ok(ApiResponse.success());
	}

	@GetMapping("/logout")
	ResponseEntity<ApiResponse<Void>> logout(
		Authentication authentication,
		HttpServletResponse response
	) {
		Cookie cookie = new Cookie("access-token", "empty");
		cookie.setHttpOnly(false);
		cookie.setMaxAge(60 * 60 * 24 * 30);
		cookie.setPath("/");
		response.addCookie(cookie);
		userService.logout((Long)authentication.getPrincipal(), authProviderFinder.findAuthProvider("카카오"));
		SecurityContextHolder.clearContext();
		return ResponseEntity.ok(ApiResponse.success());
	}

	@GetMapping("/authentication")
	ResponseEntity<ApiResponse<Long>> authentication(
		Authentication authentication
	) {
		return ResponseEntity.ok(ApiResponse.success((Long)authentication.getPrincipal()));
	}
}