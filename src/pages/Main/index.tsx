import styled from '@emotion/styled';

import BottomBar from '@components/BottomBar/BottomBar';
import GuideBox from '@components/GuideBox/GuideBox';
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
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  overflow: hidden;
`;
const AnswerContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px 20px;
`;

const Main = () => {
  return (
    <MainContainer>
      <SideBar />
      <ContentsContainer>
        <AnswerContainer>
          <GuideBox />
        </AnswerContainer>
        <BottomBar />
      </ContentsContainer>
    </MainContainer>
  );
};

export default Main;
