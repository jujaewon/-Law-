package com.hellolaw.hellolaw.entity;

import java.util.List;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "law")
public class Law extends BaseEntity {

	@Column(name = "name", unique = true, nullable = false)
	private String name;

	@Column(name = "contents", columnDefinition = "TEXT")
	private String contents;

	@Enumerated(EnumType.STRING)
	@Column(name = "category")
	private Category category;

	@Column(name = "count")
	@ColumnDefault("0")
	@Setter
	private Long count;

	@OneToMany(mappedBy = "law")
	private List<RelatedAnswer> relatedAnswers;
}
