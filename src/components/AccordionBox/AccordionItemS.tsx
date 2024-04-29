import { useEffect } from 'react';

import styled from '@emotion/styled';

import { CategoryType } from '@@types/custom';
import Icon from '@components/Icon/Icon';
import { getCategoryTitle, setCategoryData } from '@store/sidebarStore';
const ContentContainer = styled.div`
  background: #ffffff;
  border-bottom: solid 1px ${(props) => props.theme.gray1};
  padding: 10px 20px;

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
interface AccordionItemQProps {
  item: CategoryType;
}
const AccordionItemS = ({ item }: AccordionItemQProps) => {
  const setCategory = setCategoryData();
  const title = getCategoryTitle();
  const handleSelect = async () => {
    setCategory({
      isSelect: true,
      title: item.text,
      data: [
        {
          rank: 1,
          title: '법 1조 1항',
        },
        {
          rank: 2,
          title: '법 1조 1항',
        },
        {
          rank: 3,
          title: '법 1조 1항',
        },
        {
          rank: 4,
          title: '법 1조 1항',
        },
        {
          rank: 5,
          title: '법 1조 1항',
        },
        {
          rank: 6,
          title: '법 1조 1항',
        },
        {
          rank: 7,
          title: '법 1조 1항',
        },
        {
          rank: 8,
          title: '법 1조 1항',
        },
        {
          rank: 9,
          title: '법 1조 1항',
        },
        {
          rank: 10,
          title: '법 1조 1항',
        },
      ],
    });
  };
  useEffect(() => {
    console.log('Updated title:', title);
  }, [title]);

  return (
    <ContentContainer onClick={handleSelect}>
      <Icon icon={item.icon} />
      <TextWrapper>{item.text}</TextWrapper>
    </ContentContainer>
  );
};

export default AccordionItemS;
