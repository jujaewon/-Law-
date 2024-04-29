import React, { useState } from 'react';

import theme from '@styles/theme';

const categories = [
  '스토킹',
  '성범죄',
  '폭행/상해',
  '사기',
  '상속/가사',
  '이혼',
  '교통사고/음주운전',
  '마약',
  '대여금/미수금/채권추심',
  '행정소송',
  '소비자분쟁',
  '기타',
];

const FirstContent: React.FC<{ onCategoryClick: (category: string) => void }> = ({ onCategoryClick }) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category} onClick={() => onCategoryClick(category)}>
          {category}
        </div>
      ))}
    </div>
  );
};

interface SecondContentProps {
  selectedText: string;
  onTextClick: (text: string) => void;
}

const SecondContent: React.FC<SecondContentProps> = ({ selectedText, onTextClick }) => (
  <div className="inline-flex size-auto items-start justify-start gap-5 rounded-lg border border-zinc-200 bg-white p-[25px] shadow">
    <div
      className={`font-['Pretendard Variable'] size-auto text-xl font-bold leading-tight ${selectedText === 'victim' ? 'text-sky-500' : 'text-slate-400'}`}
      onClick={() => onTextClick('victim')}
    >
      피해자
      <br />
    </div>
    <div
      className={`font-['Pretendard Variable'] size-auto text-xl font-bold leading-tight ${selectedText === 'offender' ? 'text-sky-500' : 'text-slate-400'}`}
      onClick={() => onTextClick('offender')}
    >
      가해자
    </div>
  </div>
);

const ContentBox: React.FC = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리를 저장하는 상태
  const [selectedText, setSelectedText] = useState('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // 카테고리 클릭 시 상태 업데이트
    setShowOptions1(false); // 옵션 창 닫기
  };

  const handleTextClick = (text: string) => {
    setSelectedText(text);
    setShowOptions2(false); // 클릭 시 옵션 숨기기
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
    <div className="inline-flex h-[100px] w-[800px] flex-col items-start justify-start gap-[7px]">
      <div className="inline-flex items-start justify-start gap-5">
        <div className="flex h-6 w-[76px] items-center justify-center gap-[5px] px-[5px]">
          <div className="flex items-center" onClick={() => setShowOptions1(!showOptions1)}>
            <div
              style={{ color: theme.primary }}
              className="flex h-6 w-[45px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none"
            >
              {selectedCategory || '-'}
            </div>
            <div
              style={{ color: theme.primary }}
              className="flex h-6 w-[45px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none"
            >
              -
            </div>
            {showOptions1 && <FirstContent onCategoryClick={handleCategoryClick} />}
          </div>
        </div>

        <div className="flex h-6 w-[76px] items-center justify-center gap-[5px] px-[5px]">
          <div className="flex items-center" onClick={() => setShowOptions2(!showOptions2)}>
            <div
              style={{ color: theme.black }}
              className="flex h-6 w-[45px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none"
            >
              {getDynamicMinusText()}
            </div>
            <div
              style={{ color: theme.black }} // 선택된 값에 따라 색상 적용
              className="flex h-6 w-[45px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none"
            >
              -
            </div>
          </div>
        </div>
        {showOptions2 && <SecondContent selectedText={selectedText} onTextClick={handleTextClick} />}
      </div>
    </div>
  );
};

export default ContentBox;
