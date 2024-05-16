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
			.route("test_route", r -> r.path("/test")
				.filters(f -> f.rewritePath("/test", "/api/test"))
				.uri("http://localhost:8082"))
			.build();
	}
}
