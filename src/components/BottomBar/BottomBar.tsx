import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import ContentBox from '@components/ContentBox/ContentBox';
import theme from '@styles/theme';

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Test = styled.div`
  width: 60px;
  position: absolute;
  top: -120px;
  left: calc(50% - 422.5px);
  transform: translateX(0);
`;

const BottomBar: React.FC = () => {
  const [message, setMessage] = useState<string>('어떤 문제가 있으신가요?');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [divHeight, setDivHeight] = useState<string>('70px'); // 동적으로 조정될 div의 높이 상태

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = event.target.value;
    setMessage(newMessage);

    // textarea 높이 자동 조정
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;

    // div 높이 동적 조정 로직 (복잡한 로직이 필요할 경우 여기를 조정)
    const numberOfLines = newMessage.split('\n').length;
    const newDivHeight = Math.max(70, 20 * numberOfLines); // 예시 로직: 줄 수에 따라 높이 조정
    setDivHeight(`${newDivHeight}px`);
  };

  const activateEdit = () => {
    if (message === '어떤 문제가 있으신가요?') {
      setMessage('');
    }
    setIsEditing(true);
  };

  const deactivateEdit = () => {
    setIsEditing(false);
    if (message.trim() === '') {
      setMessage('어떤 문제가 있으신가요?');
    }
  };

  useEffect(() => {
    const textarea = document.getElementById('autoresizetextarea') as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

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
        className="relative rounded-[30px] bg-white shadow"
        style={{
          width: '845px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          height: divHeight,
        }}
      >
        <div
          className="absolute left-[20px] top-[13px] flex w-[700px] items-center justify-start gap-2"
          style={{ alignItems: 'center' }}
        >
          <div className="relative mr-4 h-[50px] w-[23px]" onClick={activateEdit}>
            🧠
          </div>
          {isEditing ? (
            <textarea
              id="autoresizetextarea"
              value={message}
              onChange={handleChange}
              onBlur={deactivateEdit}
              autoFocus
              style={{
                fontSize: '20px',
                overflow: 'hidden',
                width: '100%',
              }}
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
          <div
            className="absolute left-[782px] top-[6px] inline-flex size-12 items-end justify-end gap-2.5 rounded-[60px] bg-sky-500 p-2.5 shadow"
            onClick={() => window.location.reload()}
          >
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
