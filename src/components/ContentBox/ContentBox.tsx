import React, { useState } from 'react';

import './ContentBox.css';
import { Theme, css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@styles/theme';

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

const FirstContent: React.FC<{ onCategoryClick: (category: string) => void }> = ({ onCategoryClick }) => {
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
          <div
            key={`${index}-${subIndex}`} // 고유한 key를 생성합니다.
            className="w-500 h-300 flex cursor-pointer items-center justify-center rounded-md font-['Pretendard_Variable'] text-3xl font-bold leading-tight hover:bg-slate-100" // 너비, 높이, 글자 크기 조정
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </div>
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
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리를 저장하는 상태
  const [selectedText, setSelectedText] = useState('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setShowOptions1(false);
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
              }} // minWidth를 적용하여 첫 번째 "-"의 위치를 고정하고, 카테고리 이름이 한 줄에 나타나도록 함
              className="flex h-[30px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none"
            >
              {selectedCategory || '-'}
            </div>
            <div
              style={{ color: theme.primary, fontSize: '20px', margin: '2px', position: 'absolute', right: '0px' }}
              className="flex h-[30px] w-[60px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none"
              onClick={() => setShowOptions1(!showOptions1)}
            >
              -
            </div>
          </div>
          {showOptions1 && (
            <div className="first-dropdown-box">
              <FirstContent onCategoryClick={handleCategoryClick} />
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
