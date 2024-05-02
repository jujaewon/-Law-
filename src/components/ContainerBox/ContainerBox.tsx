import React, { useState } from 'react';

import IconBlue from '../../assets/IconBlue.svg';
import IconGray from '../../assets/IconGray.svg';

const ContainerBox: React.FC = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedText, setSelectedText] = useState('');

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
      {showOptions1 && (
        <div className="inline-flex h-[184px] w-[266px] items-start justify-start gap-2.5 rounded-lg border border-zinc-200 bg-white p-[25px] shadow">
          <div className="font-['Pretendard Variable'] h-[17px] w-[60px] text-xs font-bold leading-tight text-sky-500">
            스토킹
            <br />
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[60px] text-xs font-bold leading-tight text-slate-400">
            성범죄
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[60px] text-xs font-bold leading-tight text-slate-400">
            폭행/상해
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[60px] text-xs font-bold leading-tight text-slate-400">
            사기
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[60px] text-xs font-bold leading-tight text-slate-400">
            상속/가사
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[60px] text-xs font-bold leading-tight text-slate-400">
            이혼
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[130px] text-xs font-bold leading-tight text-slate-400">
            교통사고/음주운전
            <br />
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[43px] text-xs font-bold leading-tight text-slate-400">
            마약
            <br />
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[130px] text-xs font-bold leading-tight text-slate-400">
            대여금/미수금/채권추심
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[51px] text-xs font-bold leading-tight text-slate-400">
            행정소송
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[60px] text-xs font-bold leading-tight text-slate-400">
            소비자분쟁
          </div>
          <div className="font-['Pretendard Variable'] h-[17px] w-[60px] text-xs font-bold leading-tight text-slate-400">
            기타
          </div>
        </div>
      )}
      {showOptions2 && (
        <div className="inline-flex size-auto items-start justify-start gap-5 rounded-lg border border-zinc-200 bg-white p-[25px] shadow">
          <div
            className={`font-['Pretendard Variable'] size-auto text-xl font-bold leading-tight ${selectedText === 'victim' ? 'text-sky-500' : 'text-slate-400'}`}
            onClick={() => handleTextClick('victim')}
          >
            피해자
            <br />
          </div>
          <div
            className={`font-['Pretendard Variable'] size-auto text-xl font-bold leading-tight ${selectedText === 'offender' ? 'text-sky-500' : 'text-slate-400'}`}
            onClick={() => handleTextClick('offender')}
          >
            가해자
          </div>
        </div>
      )}
      <div className="inline-flex h-9 items-center justify-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-[22px] py-[15px]">
        <div className="w-[480px] font-['Pretendard_Variable'] text-[20px] font-bold leading-tight text-sky-500">
          추가 옵션을 선택해주신다면 더 정확도 높은 답변이 나와요!
        </div>
      </div>
      <div className="inline-flex items-start justify-start gap-5">
        <div className="flex h-6 w-[76px] items-center justify-center gap-[5px] px-[5px]">
          <div className="flex items-center" onClick={() => setShowOptions1(!showOptions1)}>
            <div className="flex h-6 w-[45px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none text-sky-500">
              -
            </div>
            <img src={IconBlue} alt="Icon Blue" className="size-5" />
          </div>
        </div>
        <div className="flex h-6 w-[76px] items-center justify-center gap-[5px] px-[5px]">
          <div className="flex items-center" onClick={() => setShowOptions2(!showOptions2)}>
            <div className="flex h-6 w-[45px] items-center justify-center font-['Pretendard_Variable'] text-xl font-bold leading-none text-neutral-900">
              {getDynamicMinusText()}
            </div>
            <img src={IconGray} alt="Icon Gray" className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerBox;
