package com.hellolaw.hellolaw.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.hellolaw.hellolaw.resolver.UserIdArgumentResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Autowired
	private UserIdArgumentResolver userIdArgumentResolver;

	@Override
	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
		resolvers.add(userIdArgumentResolver);
	}
}