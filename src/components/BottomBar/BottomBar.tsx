import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import ContentBox from '@components/ContentBox/ContentBox';

import { breakpoints } from '@styles/breakpoints';

const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

// Test 컴포넌트에 대한 수정된 부분
const Test = styled.div`
  width: 60px; // 주석은 CSS에서 유효하지 않으므로 제거해야 합니다.
  position: absolute;
  top: -50px;
  left: calc(15%);
  transform: translateX(0);
  font-size: 24px;
  color: ${(props) => props.theme.primary};

  // breakpoints를 적용하는 방법을 수정합니다.
  ${breakpoints.md} {
    font-size: 20px;
    width: 45px;
  }

  ${breakpoints.sm} {
    font-size: 14px;
  }
`;

const Container = styled.div`
  width: 1200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  min-height: 70px;
  display: flex;
  justify-content: space-between;

  ${breakpoints.md} {
    width: 800px;
  }

  ${breakpoints.sm} {
    width: 600px;
  }
`;

const ReloadButton = styled.div`
  position: absolute;
  right: 20px;
  top: 23px;
  display: inline-flex;
  align-items: end;
  justify-content: end;
  gap: 2.5px; // 단위(px) 추가
  padding: 2.5px; // 단위(px) 추가
  background-color: skyblue;
  border-radius: 60px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3); // CSS 속성명 수정
  cursor: pointer;
`;

const BottomBar: React.FC = () => {
  const [message, setMessage] = useState<string>('어떤 문제가 있으신가요?');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = event.target.value;
    setMessage(newMessage);

    // 입력 필드 높이를 사용자의 입력에 따라 동적으로 조절
    event.target.style.height = 'auto'; // 먼저 자동으로 높이를 설정해 입력 내용이 줄어들 때를 대비
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
      <div className="inline-flex h-[6px] flex-col items-start justify-center gap-2.5 py-[15px]">
          <div className="flex h-[67px] w-[693px] flex-col items-start justify-start gap-[7px]">
            <div className="inline-flex h-9 items-center justify-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-[22px] py-[15px]">
              <div
                className="font-['Pretendard Variable'] font-bold leading-tight"
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
          width: '1200px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          height: 'auto', // 높이를 상태 변수로 관리
          minHeight: '70px', // 최소 높이를 설정
        }}
      >
        
        <div
          className="absolute left-[20px] top-[23px] flex w-[700px] items-center justify-start gap-2"
          style={{ alignItems: 'center' }}
        >
          <div
            className="relative mr-4 h-[25px] w-[23px]"
            onClick={activateEdit}
            style={{
              transform: 'none', // 항상 'none'으로 설정하여 회전하지 않음.
            }}
          >
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
                fontSize: '16px',
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
            className="absolute left-[782px] inline-flex size-12 items-end justify-end gap-2.5 rounded-[60px] bg-sky-500 p-2.5 shadow"
            onClick={() => window.location.reload()}
          >
            <div className="relative size-6"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BottomBar;
