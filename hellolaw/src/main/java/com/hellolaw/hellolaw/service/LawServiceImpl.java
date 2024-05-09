package com.hellolaw.hellolaw.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.hellolaw.hellolaw.dto.LawDetailResponse;
import com.hellolaw.hellolaw.dto.SseResponse;
import com.hellolaw.hellolaw.entity.Category;
import com.hellolaw.hellolaw.entity.Law;
import com.hellolaw.hellolaw.exception.HelloLawBaseException;
import com.hellolaw.hellolaw.mapper.LawMapper;
import com.hellolaw.hellolaw.repository.LawRepository;
import com.hellolaw.hellolaw.util.ErrorBase;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class LawServiceImpl implements LawService {

	private final LawRepository lawRepository;
	private final LawMapper lawMapper;
	private final SseService sseService;

	@Override
	public LawDetailResponse getLawDetail(String lawName) {
		Law law = lawRepository.findByName(lawName)
			.orElseThrow(() -> new HelloLawBaseException(ErrorBase.E400_INVALID_LAW_NAME));
		Long cur = law.getCount();
		law.setCount(cur + 1);
		lawRepository.save(law);
		return lawMapper.toLawDetailResponse(law);
	}

	@Override
	public List<SseResponse> getLawRanking(Long memberId, Category category) {
		// String ctgry = category.toString();
		// System.out.println("카테고리: " + ctgry);
		List<Law> lawRanking = lawRepository.findTop10ByCategoryOrderByCountDesc(category);
		List<SseResponse> sseResponseList = new ArrayList<>();
		for (Law law : lawRanking) {
			SseResponse response = lawMapper.toSseResponse(law);
			sseResponseList.add(response);
		}
		//sseService.sendEvent(memberId, sseResponseList);
		return sseResponseList;
	}
}
