package com.hellolaw.hellolaw.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hellolaw.hellolaw.entity.Category;
import com.hellolaw.hellolaw.entity.Law;

@Repository
public interface LawRepository extends JpaRepository<Law, Long> {

	Optional<Law> findByName(String name);

	List<Law> findTop10ByCategoryOrderByCountDesc(Category category);

	@Query("update Law l set l.count = l.count + :count where l.name = :name")
	void updateLawCountByName(String name, int count);

	@Query("update Law l set l.category = :category, l.contents = :contents where l.name = :name")
	void updateLawInformationByName(String name, String contents, String category);
}
