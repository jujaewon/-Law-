import React from 'react';

import theme from '@styles/theme';

import TextEdit from '@components/Text/TextEdit';

const InformationField1: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div style={{
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 4,
      paddingTop: 8
    }}>
      <div style={{ fontWeight: 'bold'}}>{label}</div>
      <div style={{ marginLeft: 20 }}>{value}</div>
    </div>
  );
};

const InformationField2: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div style={{
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 4,
      paddingTop: 8
    }}>
      <div style={{ fontWeight: 'bold'}}>{label}</div>
      <div style={{ marginLeft: 53 }}>{value}</div>
    </div>
  );
};

const InformationField3: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div style={{
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'row',
      paddingBottom: 4,
      paddingTop: 8
    }}>
      <div style={{ fontWeight: 'bold'}}>{label}</div>
      <div style={{ marginLeft: 45 }}>{value}</div>
    </div>
  );
};

const ChatMessage: React.FC = () => {
  return (
    <div style={{
      width: 786,
      height: 630,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 32,
      paddingBottom: 32,
      background: theme.secondary2,
      borderRadius: 16,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      display: 'inline-flex'
    }}>
      <div style={{
        alignSelf: 'stretch',
        color: 'black',
        fontSize: 14,
        fontFamily: 'Noto Sans',
        fontWeight: '400',
        wordWrap: 'break-word',
      }}>
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'end'
        }}>
          안녕하세요. 저는 법무법인 대륙아주의 법률 전문 챗봇 ‘AI 대륙아주’ 입니다.
          <button style={{
            width: 96, height: 26, paddingTop: 5, paddingBottom: 5, background: theme.primary, borderRadius: 40, overflow: 'hidden', display: 'inline-flex',
            justifyContent: 'center', alignItems: 'center',
            border: 'none',
            color: 'white', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '500',
            cursor: 'pointer'
          }}>더보기
          </button>
        </div>
        <div>질문하신 내용에 대한 최적의 답변을 제공하고자 열심히 답변을 생성하고 있습니다.</div>
        <div>보다 정확한 답변과 유용한 정보를 제공하기 위해 일부 시간이 소요될 수 있으니 잠시만 기다려주시기 바랍니다.</div>
        <div>사용자의 사건과 가장 유사한 판례는 아래와 같습니다.</div>
      </div>
      <div style={{
        alignSelf: 'stretch',
        height: 270,
        paddingLeft: 16,
        paddingRight: 16,
        background: 'white',
        borderRadius: 12,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        gap: 16,
        display: 'flex',
      }}>
        <div>
          <div style={{ borderBottom: '1px solid #D9E1E8', width: '100%' }}><InformationField1 label="Name" value="판례 이름" /></div>
          <div style={{ borderBottom: '1px solid #D9E1E8', width: '100%' }}><InformationField2 label="Tel" value="판례 정보" /></div>
          <div style={{ borderBottom: '1px solid #D9E1E8', width: '100%' }}><InformationField3 label="City" value="Ship to" /></div>
        </div>
        <div style={{
          alignSelf: 'stretch',
          height: 135,
          paddingTop: 16,
          paddingBottom: 16,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 8,
          display: 'flex'
        }}>
          <div style={{ alignSelf: 'stretch', color: '#333333', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word' }}>
            Address
          </div>
          <div style={{
            width: 722,
            height: 76,
            padding: 8,
            background: theme.gray2,
            borderRadius: 6,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-flex'
          }}>
            <div style={{ flex: '1 1 0', alignSelf: 'stretch', paddingBottom: 3, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div style={{ width: 706, color: 'black', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                <div>안녕하세요. 저는 법무법인 대륙아주의 법률 전문 챗봇 ‘AI 대륙아주’ 입니다.</div>
                <div>질문하신 내용에 대한 최적의 답변을 제공하고자 열심히 답변을 생성하고 있습니다.</div>
                <div>보다 정확한 답변과 유용한 정보를 제공하기 위해 일부 시간이 소요될 수 있으니 잠시만 기다려주시기 바랍니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{width: 235, height: 184, paddingLeft: 16, paddingRight: 16, background: 'white', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex', marginRight: 24}}>
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
            <div style={{alignSelf: 'stretch', height: 26, paddingTop: 5, paddingBottom: 5, background: theme.primary, borderRadius: 40, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
              <div style={{textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '500', wordWrap: 'break-word'}}>더보기</div>
            </div>
          </div>
        </div>
        <div style={{width: 235, height: 184, paddingLeft: 16, paddingRight: 16, background: 'white', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex', marginRight: 24}}>
          <div style={{alignSelf: 'stretch', height: 160, paddingTop: 16, paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 94, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
              <div style={{width: 203, paddingTop: 3, paddingBottom: 2, paddingRight: 0, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#333333', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '600', wordWrap: 'break-word'}}>핵심법안 2</div>
              </div>
              <div style={{width: 203, height: 62, padding: 8, background: theme.gray2, borderRadius: 6, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                <div style={{flex: '1 1 0', alignSelf: 'stretch', paddingBottom: 27, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{width: 187, color: '#B6B6B6', fontSize: 14, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word'}}><TextEdit /></div>
                </div>
              </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 26, paddingTop: 5, paddingBottom: 5, background: theme.primary, borderRadius: 40, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
              <div style={{textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '500', wordWrap: 'break-word'}}>더보기</div>
            </div>
          </div>
        </div>
        <div style={{width: 235, height: 184, paddingLeft: 16, paddingRight: 16, background: 'white', borderRadius: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
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
            <div style={{alignSelf: 'stretch', height: 26, paddingTop: 5, paddingBottom: 5, background: theme.primary, borderRadius: 40, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
              <div style={{textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Noto Sans', fontWeight: '500', wordWrap: 'break-word'}}>더보기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage;