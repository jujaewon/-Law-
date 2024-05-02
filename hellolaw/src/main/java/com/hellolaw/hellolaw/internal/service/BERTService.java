package com.hellolaw.hellolaw.internal.service;

import com.hellolaw.hellolaw.internal.dto.PrecedentDto;

public interface BERTService {
	public PrecedentDto getSimilarPrecedent(String question);
}
