package com.hellolaw.hellolaw.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.hellolaw.hellolaw.dto.QuestionAnswerResponse;
import com.hellolaw.hellolaw.dto.QuestionRequest;
import com.hellolaw.hellolaw.entity.Law;
import com.hellolaw.hellolaw.internal.dto.LawInformationDto;
import com.hellolaw.hellolaw.internal.dto.PrecedentDto;
import com.hellolaw.hellolaw.internal.service.BERTService;
import com.hellolaw.hellolaw.internal.service.BERTServiceMockImpl;
import com.hellolaw.hellolaw.internal.service.LawInformationService;
import com.hellolaw.hellolaw.mapper.LawMapper;
import com.hellolaw.hellolaw.repository.LawRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {

	private final BERTService bertService = new BERTServiceMockImpl();
	private final LawInformationService lawInformationService;
	private final LawRepository lawRepository;
	private final LawMapper lawMapper;

	@Override
	public QuestionAnswerResponse generateAnswer(QuestionRequest questionRequest) {
		PrecedentDto precedent = bertService.getSimilarPrecedent(questionRequest.getQuestion());
		List<String> list = precedent.getRelatedLaws();
		List<Law> relatedLaws = new ArrayList<>();
		list.stream().forEach(lawName -> {
			relatedLaws.add(saveRelatedLaw(lawName));
		});
		return null;
	}

	private Law saveRelatedLaw(String lawName) {
		Optional<Law> law = lawRepository.findByName(lawName);
		if (lawRepository.findByName(lawName).isEmpty()) {
			LawInformationDto lawInformationDto = lawInformationService.getLawInformation(lawName);
			Law newLaw = lawMapper.toLaw(lawInformationDto);
			return lawRepository.save(newLaw);
		} else {
			return law.orElse(null);
		}
	}
}
