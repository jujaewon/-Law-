package com.hellolaw.hellolaw.filter;

import java.util.EnumSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletContextInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.servlet.DispatcherType;
import jakarta.servlet.FilterRegistration;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;

@Configuration
public class FilterConfig implements ServletContextInitializer {
	@Value("${my.filters.url-patterns}")
	private List<String> urlPatterns;

	@Value("${hellolaw.auth.url}")
	private String authUrl;

	@Bean
	public FilterRegistrationBean<AuthenticationFilter> registrationBean() {
		FilterRegistrationBean<AuthenticationFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new AuthenticationFilter(authUrl));

		// 인증이 필요한 URL 경로들을 YML 파일을 통해 가져옵니다.
		for (String urlPattern : urlPatterns) {
			registrationBean.addUrlPatterns(urlPattern);
		}

		return registrationBean;
	}

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		EnumSet<DispatcherType> disps = EnumSet.of(DispatcherType.REQUEST, DispatcherType.FORWARD,
			DispatcherType.ASYNC);
		initFilter(servletContext, disps);
	}

	private void initFilter(ServletContext servletContext,
		EnumSet<DispatcherType> disps) {
		FilterRegistration.Dynamic myFilter =
			servletContext.addFilter("authFilter",
				new AuthenticationFilter(authUrl));

		// You can pass null as first parameter to below API calls
		myFilter.addMappingForUrlPatterns(disps, true, "/content/*");
		myFilter.addMappingForUrlPatterns(disps, true, "/app/*");
		myFilter.setAsyncSupported(true);
	}
}

