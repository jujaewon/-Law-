package com.hellolaw.hellolaw.dto;

import lombok.Builder;
import lombok.Data;
import java.io.Serializable;

@Data
public class LawRankingResponse implements Serializable{

	private Long lawId;
	private String lawName;

	public LawRankingResponse() {
	}

	@Builder
	public LawRankingResponse(Long lawId, String lawName) {
		this.lawId = lawId;
		this.lawName = lawName;
	}
}
