package com.hellolaw.hellolaw.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hellolaw.hellolaw.entity.Law;

@Repository
public interface LawRepository extends JpaRepository<Law, Long> {
	
	Optional<Law> findByName(String lawName);
}
