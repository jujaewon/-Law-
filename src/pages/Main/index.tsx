import styled from '@emotion/styled';

import SideBar from '@components/SideBar/SideBar';
import { breakpoints } from '@styles/breakpoints';

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;

  width: 100%;
  height: 100vh;

  ${breakpoints.sm} {
    font-size: 14px;
  }

  ${breakpoints.md} {
    font-size: 18px;
  }

  ${breakpoints.lg} {
    font-size: 22px;
  }
`;

const ContentsContainer = styled.div`
  flex: 1;
  flex-direction: column;
  gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
  height: 100%;
`;

function Main() {
  return (
    <MainContainer>
      <SideBar />
      <ContentsContainer>메인내용 넣어</ContentsContainer>
    </MainContainer>
  );
}

export default Main;
