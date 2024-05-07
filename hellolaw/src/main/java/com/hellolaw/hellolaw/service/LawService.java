package com.hellolaw.hellolaw.service;

import java.util.List;

import com.hellolaw.hellolaw.dto.LawDetailResponse;
import com.hellolaw.hellolaw.dto.SseResponse;

public interface LawService {

	LawDetailResponse getLawDetail(String lawName);

	List<SseResponse> getLawRanking(Long memberId);
}
