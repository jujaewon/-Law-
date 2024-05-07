import React from 'react';

import TextEdit from '@components/Text/TextEdit';

import styled from '@emotion/styled';

const FieldContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding-bottom: 4px;
  padding-top: 8px;
`;

const StyledTextDiv = styled.div`
  margin-left: 10px;
  padding-right: 50px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  margin-left: 20px;
`;

const Value1 = styled(Value)`
  margin-left: 24px;
`;

const InformationField1: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Value1>{value}</Value1>
    </FieldContainer>
  );
};

const Value2 = styled(Value)`
  margin-left: 53px;
`;

const InformationField2: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Value2>{value}</Value2>
    </FieldContainer>
  );
};

const Value3 = styled(Value)`
  margin-left: 42px;
`;

const InformationField3: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <Value3>{value}</Value3>
    </FieldContainer>
  );
};

const ChatContainer = styled.div`
  width: 800px;
  height: 630px;
  padding: 32px 16px;
  background: ${({ theme }) => theme.secondary2};
  border-radius: 16px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`;

const MessageContainer = styled.div`
  alignSelf: stretch;
  color: black;
  font-size: 14px;
  font-family: 'Noto Sans';
  font-weight: 600;
  wordWrap: break-word;
  display: flex; 
  justify-content: space-between; 
  flex-direction: column;
  align-items: stretch;
`;

const Button = styled.button`
  width: 96px; 
  height: 26px; 
  padding: 5px;
  background: ${({ theme }) => theme.primary}; 
  border-radius: 40px;
  overflow: hidden; 
  display: inline-flex;
  justify-content: center; 
  align-items: center;
  border: none;
  color: white;
  font-size: 12px;
  font-family: 'Noto Sans';
  font-weight: 500;
  cursor: pointer;
`;

const Container = styled.div`
  align-self: stretch;
  height: 270px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
`;

const ContainerAlign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid #D9E1E8;
  width: '100%';
`;

const CenterAlign = styled.div`
  flex: '1 1 0';
  align-self: 'stretch';
  padding-bottom: 3px;
  justify-content: 'center';
  align-items: 'center';
  display: 'inline-flex';
`;

const AddressSection = styled.div`
  align-self: stretch;
  height: 135px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
`;

const AddressBox = styled.div`
  width: 722px;
  height: 76px;
  padding: 8px;
  background: ${({ theme }) => theme.gray2};
  border-radius: 6px;
  display: inline-flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const LawContainer = styled.div`
  width: 240px;
  height: 184px;
  padding: 16px;
  margin-right: 26px;
  background: white;
  border-radius: 12px;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const LawContainerLast = styled.div`
  width: 235px;
  height: 184px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const LawContainerAlign = styled.div`
  align-self: 'stretch';
  height: 160px;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: 'column';
  justify-content: 'flex-start';
  align-items: 'flex-start';
  gap: 8px;
  display: 'flex';
`;


const MoreButton = styled.div`
  align-self: stretch;
  height: 26px;
  padding: 5px;
  background: ${({ theme }) => theme.primary};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  font-family: 'Noto Sans';
  font-weight: 500;
`;

const LawDetail = styled.div`
  align-self: 'stretch';
  height: 94px;
  flex-direction: 'column';
  justify-content: 'flex-start';
  align-items: 'flex-start';
  gap: 8px;
  display: 'flex';
`;

const LawTitle = styled.div`
  width: 203px;
  margin-bottom: 5px;
  padding-bottom: 2px;
  padding-right: 0;
  justify-content: 'flex-start';
  align-items: 'center';
  display: 'inline-flex';
  color: '#333333';
  font-size: 14px;
  font-family: 'Noto Sans';
  font-weight: bold;
  word-wrap: 'break-word';
  margin-left: 3px;
`;

const LawContent = styled.div`
  width: 203px;
  height: 62px;
  padding: 8px;
  background: ${props => props.theme.gray2};
  border-radius: 6px;
  overflow: 'hidden';
  justify-content: 'center';
  align-items: 'center';
  display: 'inline-flex';
`;

const AddressSectionDiv = styled.div`
  align-self: stretch;
  color: #333333;
  font-size: 14px;
  font-family: 'Noto Sans';
  font-weight: 400;
  word-wrap: break-word;
`;

const AddressBoxDiv = styled.div`
  width: 706px;
  color: black;
  font-size: 14px;
  font-family: 'Noto Sans';
  font-weight: 400;
  word-wrap: break-word;
`;

const LawContentDiv = styled.div`
  flex: 1 1 0;
  align-self: stretch;
  padding-bottom: 27px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const TextEditContainer = styled.div`
  width: 187px;
  color: #B6B6B6;
  font-size: 14px;
  font-family: 'Noto Sans';
  font-weight: 400;
  word-wrap: break-word;
`;

const ChatMessage: React.FC = () => {
  return (
    <ChatContainer>
      <MessageContainer>
        <ContainerAlign>
          <StyledTextDiv>안녕하세요. 저는 법무법인 대륙아주의 법률 전문 챗봇 ‘AI 대륙아주’ 입니다.</StyledTextDiv>
          <Button>더보기</Button>
        </ContainerAlign>
        <StyledTextDiv>질문하신 내용에 대한 최적의 답변을 제공하고자 열심히 답변을 생성하고 있습니다.</StyledTextDiv>
        <StyledTextDiv>보다 정확한 답변과 유용한 정보를 제공하기 위해 일부 시간이 소요될 수 있으니 잠시만 기다려주시기 바랍니다.</StyledTextDiv>
        <StyledTextDiv>사용자의 사건과 가장 유사한 판례는 아래와 같습니다.</StyledTextDiv>
      </MessageContainer>
      <Container>
        <div>
          <BottomLine><InformationField1 label="Name" value="판례 이름" /></BottomLine>
          <BottomLine><InformationField2 label="Tel" value="판례 정보" /></BottomLine>
          <BottomLine><InformationField3 label="City" value="Ship to" /></BottomLine>
        </div>
        <AddressSection>
          <AddressSectionDiv>
            Address
          </AddressSectionDiv>
          <AddressBox>
            <CenterAlign>
              <AddressBoxDiv>
                <div>안녕하세요. 저는 법무법인 대륙아주의 법률 전문 챗봇 ‘AI 대륙아주’ 입니다.</div>
                <div>질문하신 내용에 대한 최적의 답변을 제공하고자 열심히 답변을 생성하고 있습니다.</div>
                <div>보다 정확한 답변과 유용한 정보를 제공하기 위해 일부 시간이 소요될 수 있으니 잠시만 기다려주시기 바랍니다.</div>
              </AddressBoxDiv>
            </CenterAlign>
          </AddressBox>
        </AddressSection>
      </Container>
      
      <div>
        <LawContainer>
          <LawContainerAlign>
            <LawDetail>
              <LawTitle>핵심법안 1</LawTitle>
              <LawContent>
                <LawContentDiv>
                  <TextEditContainer><TextEdit /></TextEditContainer>
                </LawContentDiv>
              </LawContent>
            </LawDetail>
            <MoreButton>더보기</MoreButton>
          </LawContainerAlign>
        </LawContainer>
        <LawContainer>
          <LawContainerAlign>
            <LawDetail>
              <LawTitle>핵심법안 2</LawTitle>
              <LawContent>
                <LawContentDiv>
                  <TextEditContainer><TextEdit /></TextEditContainer>
                </LawContentDiv>
              </LawContent>
            </LawDetail>
            <MoreButton>더보기</MoreButton>
          </LawContainerAlign>
        </LawContainer>
        <LawContainerLast>
          <LawContainerAlign>
            <LawDetail>
              <LawTitle>핵심법안 3</LawTitle>
              <LawContent>
                <LawContentDiv>
                  <TextEditContainer><TextEdit /></TextEditContainer>
                </LawContentDiv>
              </LawContent>
            </LawDetail>
            <MoreButton>더보기</MoreButton>
          </LawContainerAlign>
        </LawContainerLast>
      </div>
    </ChatContainer>
  )
}

export default ChatMessage;