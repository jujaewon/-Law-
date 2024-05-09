package com.hellolaw.hellolaw.internal.service;

import java.util.concurrent.CompletableFuture;

import com.hellolaw.hellolaw.internal.dto.LawInformationDto;

public interface LawInformationService {

	public CompletableFuture<LawInformationDto> getLawInformation(String lawName);
}
