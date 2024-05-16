import styled from '@emotion/styled';
import React from 'react';
import { breakpoints } from '@styles/breakpoints';
import Avatar from '@components/Avatar/Avatar';

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
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
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

const TextGroup = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #282c37;
  font-weight: 600;

  ${breakpoints.md} {
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

interface GuideDefaultProps {
  onClose: () => void;
}

const GuideDefault = ({ onClose }: GuideDefaultProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    isOpen && (
      <Container>
        <CloseButton onClick={handleClose}>X</CloseButton>
            <LawContainer>
                <LawHeader>
                <StyledAvatar />
                      <TextGroup>안녕하세요. 누구나 쉽게 받는 법률 조언 헬로입니다!</TextGroup>
                      <TextGroup>법률 조언을 받는 방법을 제가 안내해드리겠습니다!</TextGroup>
                      <TextGroup>하단의 옵션 두 가지를 선택하고 내용을 입력해주시면</TextGroup>
                      <TextGroup>저 헬로가 채팅으로 알려드립니다!</TextGroup>  
                      <TextGroup>채팅에 대해서 보다 자세히 알려드리겠습니다!</TextGroup>
                      <TextGroup>채팅 메세지를 통해 판례 요약과 제안을 안내해드립니다.</TextGroup>
                      <TextGroup>채팅 상단의 더보기 버튼으로 이전 사례와 결론을 알 수 있으며</TextGroup>
                      <TextGroup>하단의 더보기 버튼을 통해 구체적인 법률을 알 수 있습니다.</TextGroup>   
                      <TextGroup>그 외의 다른 기능들에 대해 설명드리겠습니다!</TextGroup>
                      <TextGroup>사이드 바를 통해 사용자께서 최근에 질문하셨던 내용들을 확인할 수 있으며</TextGroup>
                      <TextGroup>카테고리마다 가장 많이 조회된 법안들을 알아보실 수 있습니다!</TextGroup>
              </LawHeader>
          </LawContainer>
        
      </Container>
    )
  );
};

export default GuideDefault;
