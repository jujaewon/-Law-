import styled from '@emotion/styled';
import { chatsStore } from '@store/chatsStore';
import { breakpoints } from '@styles/breakpoints';

import ChatMessage from './ChatMessage';
import { useEffect, useState } from 'react';
import { instance } from '@api/instance';

const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 100%;
  flex: 1;
  overflow: hidden;
  padding: 30px 120px 0px;

  display: flex;
  flex-direction: column;
  position: relative;

  overflow-y: auto;
  overflow-x: hidden;

  ${breakpoints.md} {
    font-size: 30px;
  }
  ${breakpoints.sm} {
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.secondary1};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.secondary3};
  }

  position: relative;
`;
const ChatWrapper = styled.div<{ $type: string }>`
  display: flex;
  justify-content: ${(props) => (props.$type == 'user' ? 'flex-end' : 'flex-start')};
  margin: 10px 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ChatMessageWrapper = styled.div`
  background-color: ${(props) => props.theme.gray2};
  padding: 16px 16px;
  border-radius: 10px;
  width: 600px;
`;

const ChatDefault = () => {
  const data = chatsStore((state) => state.data);
  const { addChatData } = chatsStore((state) => state.actions);

  const [chatBotText, setChatBotText] = useState(null);

  useEffect(() => {
    instance
      .post('/api/question')
      .then((res) => {
        if (res.data) {
          addChatData({ chat: res.data, type: 'bot' });
          ///20초 지연후에 응답
          setTimeout(() => {
            setChatBotText(res.data);
          }, 20000);
        }
      })
      .catch((err) => {
        return console.log('에러', err);
      });
  }, []);

  return (
    <Container>
      {data.map((chat, index) => (
        <ChatWrapper $type={chat.type} key={index}>
          {chat.type === 'user' ? (
            <ChatMessageWrapper>{chat.chat}</ChatMessageWrapper>
          ) : (
            <ChatMessage chatdata={chatBotText} />
          )}
        </ChatWrapper>
      ))}
    </Container>
  );
};

export default ChatDefault;
