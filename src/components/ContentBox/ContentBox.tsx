import { useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import styled from '@emotion/styled';

const DynamicColorText = styled.div<{ $isSelected: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.$isSelected ? props.theme.primary : props.theme.gray1)};
`;
const ContentBoxContainer = styled.div`
  width: 100%;
  min-width: 200px;
  height: auto;

  position: relative;
  display: flex;
  justify-items: flex-start;
  gap: 16px;
  flex-flow: wrap;
  font-size: 15px;
`;
const CatecoryWrapper = styled.div`
  min-width: 80px;
  width: auto;
  padding: 0 10px;
  height: 30px;
  position: relative;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 17px;
`;
const ModalWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0px;
  width: 300px;
`;
const OptionDetailModal = styled.div`
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  padding: 7px 22px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  height: auto;
  position: relative;
`;
const SearchOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  padding: 0 40px;
  width: 100%;
  position: relative;
`;
const OptionText = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  position: relative;
`;
interface FirstContentProps {
  onCategoryClick: (category: string) => void;
  selectedCategory: string;
}

const FirstContent = ({ onCategoryClick, selectedCategory }: FirstContentProps) => {
  const categories = [
    ['스토킹', '성범죄', '폭행/상해'],
    ['사기', '상속/가사', '이혼'],
    ['교통사고/음주운전', '마약'],
    ['대여금/미수금/채권추심', '행정소송'],
    ['소비자분쟁', '기타'],
  ];

  return (
    <div className="inline-flex flex-wrap gap-5 rounded-lg border border-zinc-200 bg-white p-[10px] shadow">
      {categories.map((subCategories, index) =>
        subCategories.map((category, subIndex) => (
          <DynamicColorText
            key={`${index}-${subIndex}`}
            $isSelected={category === selectedCategory}
            onClick={() => onCategoryClick(category)}
          >
            <div className="flex cursor-pointer items-center justify-center rounded-md font-['Pretendard_Variable'] text-3xl font-bold leading-tight hover:bg-slate-100">
              {category}
            </div>
          </DynamicColorText>
        )),
      )}
    </div>
  );
};

interface SecondContentProps {
  selectedText: string;
  onTextClick: (text: string) => void;
}

const SecondContent = ({ selectedText, onTextClick }: SecondContentProps) => (
  <div className="inline-flex flex-wrap gap-5 rounded-lg border border-zinc-200 bg-white p-[10px] shadow">
    <DynamicColorText $isSelected={selectedText === 'victim'} onClick={() => onTextClick('피해자')}>
      피해자
      <br />
    </DynamicColorText>
    <DynamicColorText $isSelected={selectedText === 'offender'} onClick={() => onTextClick('가해자')}>
      가해자
    </DynamicColorText>
  </div>
);
interface OptionsType {
  category: string;
  humanType: string;
}
const ContentBox = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  const [options, setOptions] = useState<OptionsType>({
    category: '-',
    humanType: '-',
  });

  const { category, humanType } = options;

  const handleOptionsShow = (type: string) => {
    if (showOptions1 || showOptions2) return;

    if (type === 'category') setShowOptions1(!showOptions1);
    if (type === 'humanType') setShowOptions2(!showOptions2);
  };

  const handleCategoryClick = (value: string) => {
    setOptions((prev) => ({
      ...prev,
      category: value,
    }));

    setShowOptions1(false);
  };

  const handleTextClick = (text: string) => {
    setOptions((prev) => ({
      ...prev,
      humanType: text,
    }));
    setShowOptions2(false);
  };

  useEffect(() => {
    if (category !== '-' || humanType !== '-') setShowGuide(false);
  }, [category, humanType]);

  return (
    <SearchOptionContainer>
      {showGuide && (
        <OptionDetailModal>
          <OptionText>추가 옵션을 선택해주신다면 더 정확도 높은 답변이 나와요!</OptionText>
        </OptionDetailModal>
      )}

      <ContentBoxContainer>
        <CatecoryWrapper onClick={() => handleOptionsShow('category')}>
          {category}
          <RiArrowDownSLine />
          {showOptions1 && (
            <ModalWrapper>
              <FirstContent onCategoryClick={handleCategoryClick} selectedCategory={category} />
            </ModalWrapper>
          )}
        </CatecoryWrapper>

        <CatecoryWrapper onClick={() => handleOptionsShow('humanType')}>
          {humanType}
          <RiArrowDownSLine />
          {showOptions2 && (
            <ModalWrapper>
              <SecondContent onTextClick={handleTextClick} selectedText={humanType} />
            </ModalWrapper>
          )}
        </CatecoryWrapper>
      </ContentBoxContainer>
    </SearchOptionContainer>
  );
};

export default ContentBox;
