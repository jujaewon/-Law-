package com.hellolaw.hellolaw.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.StoredProcedureParameter;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Precedent extends BaseEntity{

	@Column(name = "caseNo")
	private String caseNo;

	@Column(name = "judmnAdjuDe")
	private LocalDateTime judgementDate;

	@Column(name = "courtNm")
	private String courtName;

	@Column(name = "caseNm")
	private String caseName;

	@Column(name = "disposalContent")
	private String disposal;

	@Column(name = "caseField")
	private Long caseField;

	@Column(name = "detailField")
	private Long detailField;

	@Column(name = "trailField")
	private Long trailField;

	@Column(name = "cnclsns")
	private String conclusion;

	@OneToMany(mappedBy = "precedent")
	private List<RelatedAnswer> relatedAnswers;

}
