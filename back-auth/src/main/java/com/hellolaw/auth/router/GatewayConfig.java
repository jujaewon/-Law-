package com.hellolaw.auth.router;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {
	@Bean
	public RouteLocator precedentRouterLocator(RouteLocatorBuilder builder) {
		return builder.routes()
			.route("precedent-service", r -> r.path("/question/**")
				.filters(f -> f.stripPrefix(1))
				.uri("lb://QUESTION-SERVICE"))
			.build();
	}
}
