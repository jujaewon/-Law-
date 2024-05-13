package com.hellolaw.hellolaw.mapper;

import org.mapstruct.Mapper;

import com.hellolaw.hellolaw.entity.Answer;
import com.hellolaw.hellolaw.entity.SummaryAnswer;

@Mapper(componentModel = "spring")
public interface SummaryAnswerMapper {

	SummaryAnswer toSummaryAnswer(String contents, Answer answer);
}
