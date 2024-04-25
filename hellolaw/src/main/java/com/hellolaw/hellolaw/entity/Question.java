package com.hellolaw.hellolaw.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Question extends BaseEntity{

	@Column(name = "contents")
	private String contents;

	@Column(name = "victim")
	private boolean victim;

	@OneToOne(mappedBy = "question")
	private Answer answer;
}
