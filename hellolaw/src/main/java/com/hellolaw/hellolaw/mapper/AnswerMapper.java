package com.hellolaw.hellolaw.mapper;

import org.mapstruct.Mapper;

import com.hellolaw.hellolaw.entity.Answer;
import com.hellolaw.hellolaw.entity.Question;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

	Answer toAnswer(Question question, String contents);
}