package com.hellolaw.hellolaw.service;

import java.util.List;

import com.hellolaw.hellolaw.dto.LawDetailResponse;
import com.hellolaw.hellolaw.dto.SseResponse;
import com.hellolaw.hellolaw.entity.Category;

public interface LawService {

	LawDetailResponse getLawDetail(String lawName);

	List<SseResponse> getLawRanking(Long memberId, Category category);
}
