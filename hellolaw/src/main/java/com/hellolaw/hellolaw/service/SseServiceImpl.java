package com.hellolaw.hellolaw.service;

import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.hellolaw.hellolaw.exception.HelloLawBaseException;
import com.hellolaw.hellolaw.util.ErrorBase;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class SseServiceImpl implements SseService {
	private final ConcurrentHashMap<Long, SseEmitter> concurrentHashMap = new ConcurrentHashMap<>();
	// 5분 timeout
	private static final Long TIME_OUT = 300000L;

	@Override
	public SseEmitter subscribe(Long memberId) {
		SseEmitter sseEmitter = createSseEmitter(memberId);
		sendEvent(memberId, "EventStream Created");
		return sseEmitter;
	}

	@Override
	public SseEmitter createSseEmitter(Long memberId) {
		SseEmitter sseEmitter = new SseEmitter(TIME_OUT);

		sseEmitter.onTimeout(() -> {
			log.info("timeout callback");
			concurrentHashMap.remove(memberId);
			sseEmitter.complete();
		});

		sseEmitter.onCompletion(() -> {
			log.info("completion callback");
			concurrentHashMap.remove(memberId);
		});

		sseEmitter.onError((e) -> {
			log.info("error callback");
			concurrentHashMap.remove(memberId);
		});

		concurrentHashMap.put(memberId, sseEmitter);
		return sseEmitter;
	}

	// public void sendEvent(Long memberId, SseResponse sseResponseDto) {
	@Override
	public void sendEvent(Long memberId, Object data) {
		SseEmitter sseEmitter = concurrentHashMap.get(memberId);
		if (sseEmitter == null) {
			throw new HelloLawBaseException(ErrorBase.E404_NOT_EXISTS_SSE_EMITTER);
		}

		try {
			//sseEmitter.send(data);
			sseEmitter.send(SseEmitter.event()
				.name("event")
				//.data(data, MediaType.APPLICATION_JSON));
				.data(data));
			log.info("emitter : ", sseEmitter);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("sendEvent error");
		}

		log.info("sendEvent success");
	}
}
