package com.hellolaw.hellolaw.dto;

import lombok.Data;

@Data
public class QuestionRequest {
	String category;
	Boolean victim;
	String question;
}
