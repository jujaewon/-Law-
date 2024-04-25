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
  margin: 60px 0;
`;

const StyledTextContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledText = styled.span`
  font-size: 50px;
  font-weight: 600; // font-semibold에 해당
  font-family: 'Pretendard Variable', sans-serif;
  color: ${(props) => (props.color === 'sky-500' ? '#0ea5e9' : 'black')};
  &:first-child {
    margin-bottom: 10px;
  }
`;

const FraudAlertContainer = styled.div`
  width: 835px;
  height: auto;
  padding: 25px 46px;
  background-color: #f8fafc; 
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const AlertHeader = styled.div`
  display: flex;
  align-items: center; 
  width: 100%; 
  justify-content: start; 
  margin-bottom: 20px; 
`;

const AlertImage = styled.img`
  width: 47.5px;
  height: 40px;
  margin-left: 16px;
`;

const AlertMainText = styled.div`
  width: 128px; 
  height: 48px; 
  text-align: start;
  color: #3b82f6; 
  font-size: 32px;
  font-weight: 600; 
  font-family: 'Pretendard Variable', sans-serif;
  margin-left: 16px; 
`;

const AlertDetailText = styled.div`
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
        <StyledTextContainer>
          <StyledText>누구나 쉽게 받는 법률 조언</StyledText>
          <StyledText color="sky-500">“헬로(Law)!“</StyledText>
          <FraudAlertContainer>
            <AlertHeader>
              <AlertImage src="" />
              <AlertMainText>사기</AlertMainText>
            </AlertHeader>
            <AlertDetailText>제가 사기를 당했어요 보이스피싱에 당했는데 실수로 2천만원을 송금했어요 어떻게 해야하나요?</AlertDetailText>
          </FraudAlertContainer>
          <FraudAlertContainer>
            <AlertHeader>
              <AlertImage src="" />
              <AlertMainText>교통사고</AlertMainText>
            </AlertHeader>
            <AlertDetailText>제가 사기를 당했어요 보이스피싱에 당했는데 실수로 2천만원을 송금했어요 어떻게 해야하나요?</AlertDetailText>
          </FraudAlertContainer>
          <OptionAlertContainer />
        </StyledTextContainer>
      </ContentsContainer>
    </MainContainer>
  );
}

function OptionAlertContainer() {
  return (
    <div className="mt-24 w-full max-w-4xl flex flex-col gap-2">
      <div className="px-4 py-4 bg-white rounded-lg border border-zinc-200 flex items-center justify-center gap-2 transform -translate-x-40 max-w-2xl whitespace-nowrap">
        <p className="text-sky-500 text-lg font-bold">추가 옵션을 선택해주신다면 더 정확도 높은 답변이 나와요!</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-start items-start gap-5 transform -translate-x-40">
        <Option text="옵션 1" color="text-sky-500" />
        <Option text="옵션 2" color="text-neutral-900" />
      </div>
    </div>
  );
}

interface OptionProps {
  text: string;
  color: string;
}

function Option({ text, color }: OptionProps) {
  return (
    <div className="w-20 h-6 px-2 flex justify-center items-center gap-1">
      <p className={`h-6 text-center ${color} text-sm font-bold`}>{text}</p>
      <div className="w-4 h-4 relative" />
    </div>
  );
}

export default Main;