package com.hellolaw.hellolaw.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Law extends BaseEntity {

	@Column(name = "name")
	private String name;

	@Column(name = "contents")
	private String contents;

	@Enumerated(EnumType.STRING)
	private Category category;

	@Column(name = "count")
	private Long count;

	@OneToMany(mappedBy = "law")
	private List<RelatedAnswer> relatedAnswers;
}
