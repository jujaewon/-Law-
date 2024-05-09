package com.hellolaw.hellolaw.service;

import org.springframework.stereotype.Service;

import com.hellolaw.hellolaw.entity.Question;
import com.hellolaw.hellolaw.repository.QuestionRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
	private final QuestionRepository questionRepository;

	@Override
	public Void deleteQuestion(Long userId, Long questionId) {
		Question question = questionRepository.findQuestionByUserIdAndQuestionId(userId, questionId).orElseThrow();
		questionRepository.delete(question);
		return null;
	}
}
