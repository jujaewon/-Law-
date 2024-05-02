import React, { useState } from 'react';

import './ContentBox.css';
import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@styles/theme';

interface DynamicColorCategoryProps {
  theme: Theme;
  isSelected: boolean;
}

interface DynamicColorTextProps {
  theme: Theme;
  isSelected: boolean;
}

const DynamicColorText = styled.div<DynamicColorTextProps>(
  ({ theme, isSelected }) => css`
    font-family: 'Pretendard Variable';
    font-size: 1.5rem;
    font-weight: bold;
    line-height: tight;
    color: ${isSelected ? theme.primary : theme.gray1};
  `,
);

const DynamicColorCategory = styled.div<DynamicColorCategoryProps>(
  ({ theme, isSelected }) => css`
    font-family: 'Pretendard Variable';
    font-size: 1.5rem;
    font-weight: bold;
    line-height: tight;
    color: ${isSelected ? theme.primary : theme.gray1};
  `,
);

interface FirstContentProps {
  onCategoryClick: (category: string) => void;
  selectedCategory: string;
}

const FirstContent: React.FC<FirstContentProps> = ({ onCategoryClick, selectedCategory }) => {
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
          <DynamicColorCategory
            key={`${index}-${subIndex}`}
            isSelected={category === selectedCategory}
            onClick={() => onCategoryClick(category)}
            theme={theme}
          >
            <div className="flex cursor-pointer items-center justify-center rounded-md font-['Pretendard_Variable'] text-3xl font-bold leading-tight hover:bg-slate-100">
              {category}
            </div>
          </DynamicColorCategory>
        )),
      )}
    </div>
  );
};

interface SecondContentProps {
  selectedText: string;
  onTextClick: (text: string) => void;
}

const SecondContent: React.FC<SecondContentProps> = ({ selectedText, onTextClick }) => (
  <div className="inline-flex size-auto items-start justify-start gap-5 rounded-lg border border-zinc-200 bg-white p-[25px] shadow">
    <DynamicColorText isSelected={selectedText === 'victim'} theme={theme} onClick={() => onTextClick('victim')}>
      피해자
      <br />
    </DynamicColorText>
    <DynamicColorText isSelected={selectedText === 'offender'} theme={theme} onClick={() => onTextClick('offender')}>
      가해자
    </DynamicColorText>
  </div>
);

const ContentBox: React.FC = () => {
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
    <div className="inline-flex h-[120px] w-[900px] flex-col items-start justify-start gap-[2px]">
      <div className="inline-flex items-start justify-start">
        <div className="relative flex h-[30px] w-[250px] items-center justify-center gap-[4px] px-[20px]">
          <div className="flex items-center">
            <div
              style={{
                color: theme.primary,
                fontSize: '20px',
                margin: '2px',
                position: 'absolute',
                left: '10px',
                minWidth: '120px',
              }}
              className="flex h-[30px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none"
            >
              {selectedCategory || '-'}
            </div>
            <div
              style={{ color: theme.primary, fontSize: '20px', margin: '2px', position: 'absolute', right: '0px' }}
              className="flex h-[30px] w-[60px] items-center justify-center font-['Pretendard_Variable'] text-3xl font-bold leading-none"
              onClick={() => setShowOptions1(!showOptions1)}
            >
              -
            </div>
          </div>
          {showOptions1 && (
            <div className="first-dropdown-box">
              <FirstContent onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
            </div>
          )}
        </div>

        <div className="flex h-[30px] w-[250px] items-center justify-center gap-[4px] px-[10px]">
          <div className="flex items-center" onClick={() => setShowOptions2(!showOptions2)}>
            <div
              style={{ color: theme.black, fontSize: '20px', margin: '2px' }}
              className="flex h-[30px] w-[60px] items-center justify-center font-['Pretendard_Variable'] font-bold leading-none"
            >
              {getDynamicMinusText()}
            </div>
            <div
              style={{ color: theme.black, fontSize: '20px', margin: '2px' }}
              className="flex h-[30px] w-[60px] items-center justify-center font-['Pretendard_Variable'] font-bold leading-none"
            >
              -
            </div>
          </div>
        </div>
        {showOptions2 && (
          <div className="second-dropdown-box">
            <SecondContent selectedText={selectedText} onTextClick={handleTextClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentBox;
