package com.hellolaw.hellolaw.internal.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.hellolaw.hellolaw.internal.dto.SuggestionDto;

public interface SuggestionService {

	SuggestionDto getSuggestion(String question) throws JsonProcessingException;
}
