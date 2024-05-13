package com.hellolaw.hellolaw.dto;

import java.util.ArrayList;
import java.util.List;

import com.hellolaw.hellolaw.entity.Answer;
import com.hellolaw.hellolaw.entity.RelatedAnswer;
import com.hellolaw.hellolaw.util.CategoryConstant;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AnswerResultResponse {
	private Long precedentId;
	private String precedentType;
	private String precedentCategory;
	private String summaryPrecedent;
	private String suggest;
	private List<String> laws;

	public static AnswerResultResponse createAnswerResultResponse(
		Answer answer
	) {
		List<String> lawNames = new ArrayList<>();

		for (RelatedAnswer relatedAnswer : answer.getRelatedAnswers()) {
			lawNames.add(relatedAnswer.getLaw().getName());
		}

		return AnswerResultResponse.builder()
			.precedentId(answer.getRelatedAnswers().get(0).getPrecedent().getId())
			.precedentType(answer.getRelatedAnswers().get(0).getPrecedent().getCaseName())
			.precedentCategory(
				CategoryConstant.getCategoryInKorean(answer.getRelatedAnswers().get(0).getLaw().getCategory().name()))
			.summaryPrecedent(answer.getSummaryAnswer().getContents())
			.suggest(answer.getContents())
			.laws(lawNames)
			.build();
	}
}
