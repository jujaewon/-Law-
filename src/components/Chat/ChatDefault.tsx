import styled from '@emotion/styled';
import { chatsStore } from '@store/chatsStore';
import { breakpoints } from '@styles/breakpoints';

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
const ChatDefault = () => {
  const data = chatsStore((state) => state.data);
  return (
    <Container>
      {data.map((chat, index) => (
        <div key={index}>{chat.chat}</div>
      ))}
    </Container>
  );
};

export default ChatDefault;
