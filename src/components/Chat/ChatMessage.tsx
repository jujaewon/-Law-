import React from 'react';

import theme from '@styles/theme';

import TextEdit from '@components/Text/TextEdit';

import styled from '@emotion/styled';

const FieldContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding-bottom: 4px;
  padding-top: 8px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  margin-left: 20px; // 기본 값입니다. 이것은 나중에 변경될 수 있습니다.
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
  width: 786px;
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
  fontSize: 14px;
  fontFamily: 'Noto Sans';
  fontWeight: 400;
  wordWrap: break-word;
  display: flex; 
  justify-content: space-between; 
  flex-direction: column;
  alignItems: end;
`;

const Button = styled.button`
  width: 96px; 
  height: 26px; 
  padding: 5px;
  background: ${({ theme }) => theme.primary}; 
  borderRadius: 40px; 
  overflow: hidden; 
  display: inline-flex;
  justify-content: center; 
  alignItems: center;
  border: none;
  color: white;
  fontSize: 12px;
  fontFamily: 'Noto Sans';
  fontWeight: 500;
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
  justify-content: flex-end;
  align-items: stretch;
  gap: 16px;
`;

const AddressSection = styled.div`
  align-self: stretch;
  height: 135px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
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

const ChatMessage: React.FC = () => {
  return (
    <ChatContainer>
      <MessageContainer>
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'end'
        }}>
          안녕하세요. 저는 법무법인 대륙아주의 법률 전문 챗봇 ‘AI 대륙아주’ 입니다.
          <Button>더보기</Button>
        </div>
        <div>질문하신 내용에 대한 최적의 답변을 제공하고자 열심히 답변을 생성하고 있습니다.</div>
        <div>보다 정확한 답변과 유용한 정보를 제공하기 위해 일부 시간이 소요될 수 있으니 잠시만 기다려주시기 바랍니다.</div>
        <div>사용자의 사건과 가장 유사한 판례는 아래와 같습니다.</div>
      </MessageContainer>
      <Container>
        <div>
          <div style={{ borderBottom: '1px solid #D9E1E8', width: '100%' }}><InformationField1 label="Name" value="판례 이름" /></div>
          <div style={{ borderBottom: '1px solid #D9E1E8', width: '100%' }}><InformationField2 label="Tel" value="판례 정보" /></div>
          <div style={{ borderBottom: '1px solid #D9E1E8', width: '100%' }}><InformationField3 label="City" value="Ship to" /></div>
        </div>
        <AddressSection>
          <div style={{ alignSelf: 'stretch', color: '#333333', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word' }}>
            Address
          </div>
          <AddressBox>
            <div style={{ flex: '1 1 0', alignSelf: 'stretch', paddingBottom: 3, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div style={{ width: 706, color: 'black', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                <div>안녕하세요. 저는 법무법인 대륙아주의 법률 전문 챗봇 ‘AI 대륙아주’ 입니다.</div>
                <div>질문하신 내용에 대한 최적의 답변을 제공하고자 열심히 답변을 생성하고 있습니다.</div>
                <div>보다 정확한 답변과 유용한 정보를 제공하기 위해 일부 시간이 소요될 수 있으니 잠시만 기다려주시기 바랍니다.</div>
              </div>
            </div>
          </AddressBox>
        </AddressSection>
      </Container>
      
      <div>
        <LawContainer style={{ marginRight: 24 }}>
          <div style={{alignSelf: 'stretch', height: 160, paddingTop: 16, paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 94, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
              <div style={{width: 203, paddingTop: 3, paddingBottom: 2, paddingRight: 0, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#333333', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '600', wordWrap: 'break-word'}}>핵심법안 1</div>
              </div>
              <div style={{width: 203, height: 62, padding: 8, background: theme.gray2, borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingBottom: 27, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{width: 187, color: '#B6B6B6', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word'}}><TextEdit /></div>
                </div>
              </div>
            </div>
            <MoreButton>더보기</MoreButton>
          </div>
        </LawContainer>
        <LawContainer style={{ marginRight: 24 }}>
          <div style={{alignSelf: 'stretch', height: 160, paddingTop: 16, paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 94, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
              <div style={{width: 203, paddingTop: 3, paddingBottom: 2, paddingRight: 0, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#333333', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '600', wordWrap: 'break-word'}}>핵심법안 2</div>
              </div>
              <div style={{width: 203, height: 62, padding: 8, background: theme.gray2, borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingBottom: 27, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{width: 187, color: '#B6B6B6', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word'}}><TextEdit /></div>
                </div>
              </div>
            </div>
            <MoreButton>더보기</MoreButton>
          </div>
        </LawContainer>
        <LawContainer>
          <div style={{alignSelf: 'stretch', height: 160, paddingTop: 16, paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 94, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
              <div style={{width: 203, paddingTop: 3, paddingBottom: 2, paddingRight: 0, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#333333', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '600', wordWrap: 'break-word'}}>핵심법안 3</div>
              </div>
              <div style={{width: 203, height: 62, padding: 8, background: theme.gray2, borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingBottom: 27, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{width: 187, color: '#B6B6B6', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word'}}><TextEdit /></div>
                </div>
              </div>
            </div>
            <MoreButton>더보기</MoreButton>
          </div>
        </LawContainer>
      </div>
    </ChatContainer>
  )
}

export default ChatMessage;