import { useState } from 'react';

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
  height: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  background-color: blue;
`;
const ModalWrapper = styled.div`
  position: absolute;
  top: -150px;
  width: 300px;
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
  <div className="inline-flex size-auto items-start justify-start gap-5 rounded-lg border border-zinc-200 bg-white p-[25px] shadow">
    <DynamicColorText $isSelected={selectedText === 'victim'} onClick={() => onTextClick('victim')}>
      피해자
      <br />
    </DynamicColorText>
    <DynamicColorText $isSelected={selectedText === 'offender'} onClick={() => onTextClick('offender')}>
      가해자
    </DynamicColorText>
  </div>
);

const ContentBox = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // handleCategoryClick 함수 정의
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // 선택된 카테고리를 업데이트합니다.
    setShowOptions1(false); // 선택 후 드롭다운을 닫습니다.
  };

  const handleTextClick = (text: string) => {
    setSelectedText(text);
    setShowOptions2(false);
  };

  const getDynamicMinusText = () => {
    switch (selectedText) {
      case 'victim':
        return '피해자';
      case 'offender':
        return '가해자';
      default:
        return '-';
    }
  };

  return (
    <ContentBoxContainer>
      <CatecoryWrapper onClick={() => setShowOptions1(!showOptions1)}>
        {selectedCategory || '-'}
        {showOptions1 && (
          <ModalWrapper>
            <FirstContent onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
          </ModalWrapper>
        )}
      </CatecoryWrapper>

      <CatecoryWrapper onClick={() => setShowOptions2(!showOptions2)}>{getDynamicMinusText()}</CatecoryWrapper>

      {showOptions2 && (
        <ModalWrapper>
          <SecondContent selectedText={selectedText} onTextClick={handleTextClick} />
        </ModalWrapper>
      )}
    </ContentBoxContainer>
  );
};

export default ContentBox;
