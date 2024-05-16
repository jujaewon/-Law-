package com.hellolaw.auth.config;

import static org.springframework.security.config.Customizer.*;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.SecurityWebFiltersOrder;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.util.matcher.PathPatternParserServerWebExchangeMatcher;

import com.hellolaw.auth.filter.JWTAuthenticationFilter;
import com.hellolaw.auth.handler.CustomOAuth2SuccessHandler;
import com.hellolaw.auth.util.JWTProvider;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Configuration
@EnableWebFluxSecurity
@RequiredArgsConstructor
@Slf4j
public class SecurityConfig {

	private final JWTProvider jwtProvider;
	private final CustomOAuth2SuccessHandler customOAuth2SuccessHandler;

	@Bean
	SecurityWebFilterChain filterChain(ServerHttpSecurity http) {
		http.
			authorizeExchange(authorizeExchangeSpec -> authorizeExchangeSpec
				.pathMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.pathMatchers("/login/**").permitAll()
				.pathMatchers("/health").permitAll()
				.anyExchange().authenticated())
			.oauth2Login(oAuth2LoginSpec -> oAuth2LoginSpec
				.authenticationMatcher(
					new PathPatternParserServerWebExchangeMatcher("/login/oauth2/code/{registrationId}")
				).authenticationSuccessHandler(customOAuth2SuccessHandler)
			)
			.oauth2Client(withDefaults())
			.addFilterAt(new JWTAuthenticationFilter(jwtProvider), SecurityWebFiltersOrder.AUTHENTICATION)
		;

		return http.build();
	}

	@Bean
	MapReactiveUserDetailsService userDetailsService() {
		UserDetails userDetails = User.withDefaultPasswordEncoder()
			.username("user")
			.password("password")
			.roles("USER")
			.build();
		return new MapReactiveUserDetailsService(userDetails);
	}
}