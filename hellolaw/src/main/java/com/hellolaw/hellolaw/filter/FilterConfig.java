package com.hellolaw.hellolaw.filter;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
	@Value("${my.filters.url-patterns}")
	private List<String> urlPatterns;

	@Bean
	public FilterRegistrationBean<AuthenticationFilter> registrationBean() {
		FilterRegistrationBean<AuthenticationFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new AuthenticationFilter());

		// 인증이 필요한 URL 경로들을 YML 파일을 통해 가져옵니다.
		for (String urlPattern : urlPatterns) {
			registrationBean.addUrlPatterns(urlPattern);
		}

		return registrationBean;
	}
}

