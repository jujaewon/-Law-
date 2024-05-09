package com.hellolaw.hellolaw.util;

import static com.hellolaw.hellolaw.entity.Category.*;

import java.util.HashMap;
import java.util.Map;

import com.hellolaw.hellolaw.entity.Category;

public class CategoryConverter {
	private static final Map<String, Category> categoryMap = new HashMap<>();

	static {
		categoryMap.put("스토킹", STAKING);
		categoryMap.put("성범죄", SEX_CRIME);
		categoryMap.put("교통사고 및 음주운전", TRAFFIC_ACCIDENT_AND_DRINKING_DRIVING);
		categoryMap.put("폭행 및 상해", ASSAULT_AND_INJURY);
		categoryMap.put("마약", DRUGS);
		categoryMap.put("사기", FRAUD);
		categoryMap.put("이혼", DIVORCE);
		categoryMap.put("상속 및 가사", INHERITANCE_AND_HOUSEHOLD);
		categoryMap.put("대여금 및 미수금", LOAN_AND_UNPAID_AND_BOND_COLLECTION);
		categoryMap.put("행정소송", ADMINISTRATIVE_LITIGATION);
		categoryMap.put("소비자분쟁", CONSUMER_DISPUTES);
		categoryMap.put("기타", OTHER);
	}

	public static Category getCategoryInEnum(String koreanCategory) {
		return categoryMap.getOrDefault(koreanCategory, OTHER);
	}
}
