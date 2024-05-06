import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 120px 0px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
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
  return <Container>f</Container>;
};

export default ChatDefault;
