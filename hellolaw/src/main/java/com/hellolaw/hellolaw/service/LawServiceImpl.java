package com.hellolaw.hellolaw.service;

import org.springframework.stereotype.Service;

import com.hellolaw.hellolaw.dto.LawDetailResponse;
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

	@Override
	public LawDetailResponse getLawDetail(String lawName) {
		Law law = lawRepository.findByName(lawName)
			.orElseThrow(() -> new HelloLawBaseException(ErrorBase.E400_INVALID_LAW_NAME));
		return lawMapper.toLawDetailResponse(law);
	}
}
