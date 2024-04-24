package com.hellolaw.auth.controller;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

	@GetMapping("/login/oauth2/code")
	ResponseEntity<ApiResponse<Void>> login(
		@RequestParam("code") String code,
		// @RequestParam("provider") String provider,
		HttpServletResponse response) throws IOException {

		log.info("login 로직 시작");
		AuthProvider authProvider = authProviderFinder.findAuthProvider("카카오");
		log.info(authProvider.toString());
		String accessToken = authService.getAccessToken(code, authProvider);
		log.info("kakao-accessToken: " + accessToken);
		UserInfoResponse userInfo = authService.getUserInfo(accessToken, authProvider);
		TokenResponse tokenResponse = userService.login(userInfo, authProvider);

		Cookie cookie = new Cookie("access-token", tokenResponse.getAccess_token());
		cookie.setHttpOnly(true);
		cookie.setMaxAge(60 * 60 * 24 * 30);
		cookie.setPath("/");
		response.addCookie(cookie);

		try {
			response.sendRedirect("https://k10a506.p.ssafy.io");
			return null;
		} catch (IOException e) {
			log.error("리다이렉트 실패: ", e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}

	@DeleteMapping("/logout")
	ResponseEntity<ApiResponse<Void>> logout() {
		return ResponseEntity.ok(ApiResponse.success());
	}

	@PostMapping("/authentication")
	ResponseEntity<ApiResponse<Void>> authentication(
	) {
		return null;
	}
}