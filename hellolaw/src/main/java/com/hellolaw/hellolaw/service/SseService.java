package com.hellolaw.hellolaw.service;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseService {
	public SseEmitter subscribe(Long memberId);

	public SseEmitter createSseEmitter(Long memberId);

	public void sendEvent(Long memberId, Object data);

}
