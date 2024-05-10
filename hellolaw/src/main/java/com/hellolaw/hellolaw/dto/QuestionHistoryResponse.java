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
    private String questionContents;
    private String lawType;
    private String category;


    public static QuestionHistoryResponse createQuestionHistoryResponse(Question question) {

        Answer answer = question.getAnswer();
        log.info("answer : " + question.getId());
        return QuestionHistoryResponse.builder()
                .questionId(question.getId())
                .questionContents(question.getContents())
                .lawType(answer.getRelatedAnswers().get(0).getPrecedent().getCaseName())
                .category(answer.getRelatedAnswers().get(0).getLaw().getCategory().name())
                .build();
//                return QuestionHistoryResponse.builder()
//                .questionId(1L)
//                .questionContents("Fff")
//                .lawType("Fff")
//                .category("fff")
//                .build();
    }
}
