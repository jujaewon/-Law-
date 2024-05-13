package com.hellolaw.hellolaw.dto;

import com.hellolaw.hellolaw.entity.Answer;
import com.hellolaw.hellolaw.entity.Question;
import com.hellolaw.hellolaw.util.CategoryConstant;
import lombok.Builder;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Data
@Builder
@Slf4j
public class QuestionHistoryResponse {
    private Long questionId;
    private String summary;
    private String lawType;
    private String category;


    public static QuestionHistoryResponse createQuestionHistoryResponse(Question question) {

        Answer answer = question.getAnswer();
        //answer이 없을때
        if (answer == null || answer.getRelatedAnswers().isEmpty()) {
            return null;
        }
        return QuestionHistoryResponse.builder()
                .questionId(question.getId())
                .summary(question.getContents())
                .lawType(answer.getRelatedAnswers().get(0).getPrecedent().getCaseName())
                .category(CategoryConstant.getCategoryInKorean(answer.getRelatedAnswers().get(0).getLaw().getCategory().name()))
                .build();

    }
}
