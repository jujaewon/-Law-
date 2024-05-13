import styled from '@emotion/styled';

import { RankDataType } from '@@types/custom';
import useModal from '@hooks/useModal';

const ContentContainer = styled.button`
  border-bottom: solid 1px ${(props) => props.theme.gray1};
  padding: 12px 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  svg {
    width: 22px;
  }
  &:hover {
    background: ${(props) => props.theme.secondary3};
  }
`;
const TextWrapper = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const RankWrapper = styled.div<{ $isTop: boolean }>`
  background: ${(props) => (props.$isTop ? props.theme.secondary2 : props.theme.gray2)};
  border-radius: 50%;
  display: flex;

  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  color: ${(props) => (props.$isTop ? props.theme.primary : '9E9E9E')};
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  position: relative;
`;
interface AccordionItemQProps {
  item: RankDataType;
}
const AccordionItemS = ({ item }: AccordionItemQProps) => {
  const { openModal } = useModal();

  const test = () => {
    openModal({
      type: 'info',
      props: {
        title: item.lawName,
        message:
          '대한민국은 민주공화국이다, 제2항은 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다라고 규정한다. 민주공화국(民主共和國)이란 대한민국은 민주공화국이다, 제2항은 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다라고 규정한다. 민주공화국(民主共和國)이란 사전대한민국은 민주공화국이다, 제2항은 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다라고 규정한다. 민주공화국(民主共和國)이란 사전대한민국은 민주공화국이다, 제2항은 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다라고 규정한다. 민주공화국(民主共和國)이란 사전사전적으로 주권이 국민에게 있고 주권의 운용이 국민의 의사에 따라 이루어지는 나라를 의미한다.',
      },
    });
  };
  return (
    <ContentContainer onClick={test}>
      <RankWrapper $isTop={item.rank < 4}>{item.rank}</RankWrapper>
      <TextWrapper>{item.lawName}</TextWrapper>
    </ContentContainer>
  );
};

export default AccordionItemS;
