package com.hellolaw.hellolaw.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

import com.hellolaw.hellolaw.dto.LawDetailResponse;
import com.hellolaw.hellolaw.dto.SseResponse;
import com.hellolaw.hellolaw.entity.Law;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface LawMapper {

	@Mapping(target = "lawName", source = "name")
	@Mapping(target = "lawDetail", source = "contents")
	public LawDetailResponse toLawDetailResponse(Law law);

	@Mapping(target = "lawId", source = "id")
	@Mapping(target = "lawName", source = "name")
	public SseResponse toSseResponse(Law law);
}