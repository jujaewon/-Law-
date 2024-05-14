package com.hellolaw.hellolaw.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hellolaw.hellolaw.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

	@Query("SELECT q FROM Question q JOIN FETCH q.user u WHERE q.id = :questionId")
	Optional<Question> findQuestionByQuestionIdUsingFetchJoin(Long questionId);

	List<Question> findTop2ByUserIdOrderByCreatedAtDesc(Long user_id);

}
