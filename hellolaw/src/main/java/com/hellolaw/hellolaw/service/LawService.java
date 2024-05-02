package com.hellolaw.hellolaw.service;

import com.hellolaw.hellolaw.dto.LawDetailResponse;

public interface LawService {
	
	LawDetailResponse getLawDetail(String lawName);
}
