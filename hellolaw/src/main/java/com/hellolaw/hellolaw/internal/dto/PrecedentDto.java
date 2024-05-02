package com.hellolaw.hellolaw.internal.dto;

import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PrecedentDto {
	private Integer id;
	private String caseNo;
	private LocalDate judgementDate;
	private String courtName;
	private String caseName;
	private Integer caseField;
	private Integer detailField;
	private Integer trailField;
	private List<String> relatedLaws;
	private String disposal;
	private String basicFact;
	private String courtDcss;
	private String conclusion;
}
