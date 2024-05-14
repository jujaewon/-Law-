import styled from '@emotion/styled';

import { breakpoints } from '@styles/breakpoints';
import Avatar from '@components/Avatar/Avatar';

const StyledText = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => (props.color === 'sky-500' ? props.theme.primary : 'black')};
  ${breakpoints.md} {
    font-size: 30px;
  }
  ${breakpoints.sm} {
    font-size: 14px;
  }
`;

const LawContainer = styled.div`
  min-height: 100px;
  height: auto;
  margin-bottom: 20px;
  width: 100%;
  padding: 25px 40px;
  background-color: ${(props) => props.theme.secondary3};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledAvatar = styled(Avatar)`
  width: 50px; 
  height: 50px; 
  margin-right: 10px;
`;

const LawHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-top: 5px;
`;

const HellolawGuideContainer = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 30px;
`;

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow: hidden;
  padding: 30px 120px 0px;

  ${breakpoints.md} {
    padding: 30px 40px 0px;
    font-size: 14px;
  }
  ${breakpoints.sm} {
    padding: 30px 20px 0px;
  }
`;

const TextAlign = styled.div`
  margin-left: 30px;
  font-size: 20px;
`

const TextGroup = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #282c37;
  font-weight: 600;

  ${breakpoints.md} {
    font-size: 20px;
  }
`;

const GuideDefault = () => {
    return (
      <Container>
        <StyledText>누구나 쉽게 받는 법률 조언</StyledText>
        <StyledText color="sky-500">“헬로(Law)!“</StyledText>
        <HellolawGuideContainer>
            <LawContainer>
                <LawHeader>
                <StyledAvatar />
                    <TextAlign>
                        <TextGroup>안녕하세요. 누구나 쉽게 받는 법률 조언 헬로입니다!</TextGroup>
                        <TextGroup>법률 조언을 받는 방법을 제가 안내해드리겠습니다!</TextGroup>
                        <TextGroup>하단의 옵션 두 가지를 선택하고 내용을 입력해주시면</TextGroup>
                        <TextGroup>저 헬로가 관련 법안들을 친절하게 알려드리겠습니다!</TextGroup>
                    </TextAlign>
                </LawHeader>
            </LawContainer>
        </HellolawGuideContainer>
        <HellolawGuideContainer>
          <LawContainer>
          <LawHeader>
                <StyledAvatar />
                    <TextAlign>
                        <TextGroup>그 외의 다른 기능들에 대해 설명드리겠습니다!</TextGroup>
                        <TextGroup>사이드 바를 통해 사용자께서 최근에 질문하셨던 내용들을 확인할 수 있으며</TextGroup>
                        <TextGroup>카테고리마다 가장 많이 조회된 법안들을 알아보실 수 있습니다!</TextGroup>
                    </TextAlign>
                </LawHeader>
          </LawContainer>
        </HellolawGuideContainer>
      </Container>
    );
  };
  
export default GuideDefault;