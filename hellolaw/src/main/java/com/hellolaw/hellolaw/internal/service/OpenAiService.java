package com.hellolaw.hellolaw.internal.service;

import com.hellolaw.hellolaw.internal.dto.PredecentSummaryResponse;

public interface OpenAiService {

	public PredecentSummaryResponse getBasicFactInformation(String disposal, String basicFact);
}
