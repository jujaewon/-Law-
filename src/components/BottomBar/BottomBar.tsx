import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import ContentBox from '@components/ContentBox/ContentBox';

import { breakpoints } from '@styles/breakpoints';

const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 14px;
  padding: 0px 140px 25px;
  ${breakpoints.md} {
    padding: 0px 60px 20px;
  }
  ${breakpoints.sm} {
    padding: 0px 40px 20px;
  }
`;

const OptionsContainer = styled.div`
  height: auto;
  width: 100%;
  /* ${breakpoints.sm} {
    display: none;
  } */
`;

const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 7px;
`;

const Option = styled.div`
  display: inline;
  display: inline-flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background-color: white;
  padding: 22px 15px;
  font-weight: bold;
  font-size: 15px;
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

const OptionText = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  position: relative;
`;

const FrameRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const FrameColumn = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 24px;
  position: relative;
`;
// Define the outermost container
const TypeContainer = styled.div`
  background: #ffffff;
  border-radius: 30px;
  padding: 6px 6px 6px 20px;
  align-self: stretch;
  flex-shrink: 0;
  height: 60px;
  position: relative;
  box-shadow: 0px 8px 24px -4px rgba(0, 0, 0, 0.2);
`;

// Define the first frame
const Frame38 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  width: 673px;
  position: absolute;
  left: 20px;
  top: 13px;
`;

// Define the second frame
const Frame42 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
`;

// Define groups
const Group = styled.div`
  flex-shrink: 0;
  width: 23px;
  height: 34px;
  position: static;
`;

// Define divs with emojis
const EmojiDiv = styled.div`
  color: #000000;
  text-align: left;
  font-family: 'MierA-Book', sans-serif;
  font-size: 15.4px;
  line-height: 22px;
  font-weight: 400;
  position: absolute;
  left: 4px;
  top: 12px;
  filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const SendButtonFrame = styled.div`
  background: var(--iconblue, #0080ff);
  border-radius: 60px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  position: absolute;
  left: 782px;
  top: 6px;
  box-shadow: 0px 4px 8px 0px rgba(86, 97, 246, 0.25);
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  top: 0;
`;
const EmojiDiv2 = styled(EmojiDiv)`
  font-size: 22.4px;
  line-height: 32px;
  left: 0;
  top: 0;
  filter: none;
`;

// Define the text component
const QueryText = styled.div`
  color: rgba(0, 0, 0, 0.4);
  text-align: left;
  font-family: 'PretendardVariable-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const BottomBar = () => {
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
      <SearchOptionContainer>
        <OptionDetailModal>
          <OptionText>추가 옵션을 선택해주신다면 더 정확도 높은 답변이 나와요!</OptionText>
        </OptionDetailModal>
        <ContentBox />
      </SearchOptionContainer>
      <TypeContainer>
        <Frame38>
          <Frame42>
            <Group>
              <Group>
                <EmojiDiv>🧠</EmojiDiv>
                <EmojiDiv2>🧠</EmojiDiv2>
              </Group>
            </Group>
            <QueryText>어떤 문제가 있으신가요?</QueryText>
          </Frame42>
        </Frame38>
        <SendButtonFrame>
          <Icon src="vuesax-linear-send-21.svg" />
        </SendButtonFrame>
      </TypeContainer>
    </Wrapper>
  );
};

export default BottomBar;
