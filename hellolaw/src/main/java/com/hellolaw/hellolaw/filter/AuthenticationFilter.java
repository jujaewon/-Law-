package com.hellolaw.hellolaw.filter;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.server.ResponseStatusException;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AuthenticationFilter implements Filter {
	@Value("hellolaw.auth.url")
	private String authUrl;

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		Filter.super.init(filterConfig);
	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws
		IOException,
		ServletException {
		HttpServletRequest request = (HttpServletRequest)servletRequest;
		HttpServletResponse response = (HttpServletResponse)servletResponse;
		String cookieValue = getCookieValue(request, "access-token");
		Long userId;

		if (cookieValue == null) {
			response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "No access-token found");
			return;
		}

		try {
			userId = WebClient.create()
				.get()
				.uri(authUrl)
				.header("Cookie", "access-token=" + cookieValue)
				.retrieve()
				.bodyToMono(Long.class)
				.block();

			if (userId == null || userId <= 0) {
				response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Invalid User ID");
				return;
			}
		} catch (ResponseStatusException e) {
			response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Authentication server error");
			return;
		}

		request.setAttribute("userId", userId);
		filterChain.doFilter(servletRequest, servletResponse);
	}

	@Override
	public void destroy() {
		Filter.super.destroy();
	}

	private static String getCookieValue(HttpServletRequest request, String name) {
		Cookie[] cookies = request.getCookies(); // 모든 쿠키를 가져옴
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if (name.equals(cookie.getName())) {
					return cookie.getValue(); // 쿠키 이름이 일치하면 값을 반환
				}
			}
		}
		return null; // 쿠키가 존재하지 않거나 찾고자 하는 이름의 쿠키가 없을 경우
	}
}
