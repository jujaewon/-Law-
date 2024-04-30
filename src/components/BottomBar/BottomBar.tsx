import React, { useState } from 'react';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import ContentBox from '@components/ContentBox/ContentBox';

const Wrapper = styled.div`
  height: 80px;
  // background-color: #f8f8f8;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Test = styled.div`
  width: 50px;
  position: absolute;
  top: -120px;
  left: calc(50% - 422.5px);
  transform: translateX(0);
`;

const BottomBar = () => {
  const theme = useTheme();
  const [message, setMessage] = useState('어떤 문제가 있으신가요?');
  const [isEditing, setIsEditing] = useState(false);

  // 메시지 업데이트 핸들러
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  // 입력 모드 활성화 및 기본 메시지 삭제
  const activateEdit = () => {
    if (message === '어떤 문제가 있으신가요?') {
      setMessage(''); // 기본 메시지일 때만 내용을 비웁니다.
    }
    setIsEditing(true);
  };

  // 입력 모드 비활성화 및 입력 값 저장
  const deactivateEdit = () => {
    setIsEditing(false);
    if (message.trim() === '') {
      setMessage('어떤 문제가 있으신가요?');
    }
  };

  return (
    <Wrapper>
      <Test>
        <div className="inline-flex h-[97px] w-[741px] flex-col items-start justify-center gap-2.5 py-[15px]">
          <div className="flex h-[67px] w-[693px] flex-col items-start justify-start gap-[7px]">
            <div className="inline-flex h-9 items-center justify-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-[22px] py-[15px]">
              <div
                style={{ fontSize: '20px', color: theme.primary }}
                className="font-['Pretendard Variable'] w-[560px] font-bold leading-tight"
              >
                추가 옵션을 선택해주신다면 더 정확도 높은 답변이 나와요!
              </div>
            </div>
            <ContentBox />
          </div>
        </div>
      </Test>
      <div
        className="relative h-[60px] w-[845px] rounded-[30px] bg-white shadow"
        style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className="absolute left-[20px] top-[13px] inline-flex w-[673px] items-center justify-start gap-2">
          <div className="flex items-center justify-start gap-2">
            <div className="relative mr-4 h-[34px] w-[23px]" onClick={activateEdit}>
              <div className="font-['Mier A'] absolute left-[4px] top-[12px] text-base font-medium leading-snug text-black">
                🧠
              </div>
              <div className="font-['Mier A'] absolute left-0 top-0 text-[22.40px] font-medium leading-loose text-black">
                🧠
              </div>
            </div>

            {isEditing ? (
              <input
                type="text"
                value={message}
                onChange={handleChange}
                onBlur={deactivateEdit}
                autoFocus
                style={{ fontSize: '20px' }}
                className="font-['Pretendard Variable'] font-normal leading-tight text-black text-opacity-40"
              />
            ) : (
              <div
                style={{ fontSize: '20px' }}
                className="font-['Pretendard Variable'] font-normal leading-tight text-black text-opacity-40"
                onClick={activateEdit}
              >
                {message}
              </div>
            )}
          </div>
          <div className="absolute left-[782px] top-[6px] inline-flex size-12 items-end justify-end gap-2.5 rounded-[60px] bg-sky-500 p-2.5 shadow">
            <div className="relative size-6">
              <div className="absolute left-0 top-0 size-6"></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BottomBar;
