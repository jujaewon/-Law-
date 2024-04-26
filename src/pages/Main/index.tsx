import styled from '@emotion/styled';

import BottomBar from '@components/BottomBar/BottomBar';
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
  padding: 20px 20px 0px;
`;

// const StyledTextContainer = styled.div`
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

const StyledText = styled.span`
  font-size: 50px;
  font-weight: 600; // font-semibold에 해당
  font-family: 'Pretendard Variable', sans-serif;
  color: ${(props) => (props.color === 'sky-500' ? '#0ea5e9' : 'black')};
`;

const LawContainer = styled.div`
  width: 835px;
  height: auto;
  padding: 25px 46px;
  background-color: #f8fafc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const LawHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: start;
  margin-bottom: 20px;
`;

const LawImage = styled.img`
  width: 47.5px;
  height: 40px;
  margin-left: 16px;
`;

const LawMainText = styled.div`
  width: 128px;
  height: 48px;
  text-align: start;
  color: #3b82f6;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Pretendard Variable', sans-serif;
  margin-left: 16px;
`;

const LawDetailText = styled.div`
  width: 735px;
  height: 82px;
  color: #64748b;
  font-size: 23px;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  margin-left: 16px;
  text-align: start;
`;

function Main() {
  return (
    <MainContainer>
      <SideBar />
      <ContentsContainer>
        <AnswerContainer>
          <div>
            <StyledText>누구나 쉽게 받는 법률 조언</StyledText>
            <StyledText color="sky-500">“헬로(Law)!“</StyledText>
          </div>
          <LawContainer>
            <LawHeader>
              <LawImage src="" />
              <LawMainText>사기</LawMainText>
            </LawHeader>
            <LawDetailText>
              제가 사기를 당했어요 보이스피싱에 당했는데 실수로 2천만원을 송금했어요 어떻게 해야하나요?
            </LawDetailText>
          </LawContainer>
          <LawContainer className="mb-8">
            <LawHeader>
              <LawImage src="" />
              <LawMainText>교통사고</LawMainText>
            </LawHeader>
            <LawDetailText>
              제가 사기를 당했어요 보이스피싱에 당했는데 실수로 2천만원을 송금했어요 어떻게 해야하나요?
            </LawDetailText>
          </LawContainer>
        </AnswerContainer>
        <BottomBar />
      </ContentsContainer>
    </MainContainer>
  );
}

export default Main;
