import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { AccordionDataType, AQuestionType, CategoryType, RankDataType } from '@@types/custom';
import { getCategoryData, setCategoryData } from '@store/sidebarStore';
import { AccordionQData, AccordionSData } from '@test/data';

import AccordionItemQ from './AccordionItemQ';
import AccordionItemR from './AccordionItemR';
import AccordionItemS from './AccordionItemS';

const AccordionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const Header = styled.button<{ $isOpen: boolean; $isActive: boolean }>`
  background: ${(props) => props.theme.gray2};
  border-radius: ${(props) => (props.$isActive ? '10px 10px 0px 0px' : '10px')};
  padding: ${(props) => (props.$isOpen ? '12px 20px 12px 20px' : '0px 5px')};
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  height: 41px;
  position: relative;
  color: ${(props) => (props.$isActive ? props.theme.primary : props.theme.black)};
  svg {
    color: ${(props) => (props.$isActive ? props.theme.primary : props.theme.black)};
  }
`;
const HeaderText = styled.div`
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  position: relative;
  flex: 1;
`;

const ContentsContainer = styled.div<{ $isOpen: boolean; $isActive: boolean }>`
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  display: ${(props) => (props.$isActive ? '' : 'none')};
  width: 100%;
`;
interface AccordionBoxProps {
  data: AccordionDataType;
  isOpen: boolean;
  handleOpen: () => void;
}
type AccordionItemType = AQuestionType | CategoryType | RankDataType;
const AccordionBox = ({ data, isOpen, handleOpen }: AccordionBoxProps) => {
  const [isActive, setIsActive] = useState(data.title === '실시간 인기 법률');
  const [childrenData, setChildrenData] = useState<AccordionItemType[]>([]);
  const rankData = getCategoryData();
  const setCategory = setCategoryData();

  useEffect(() => {
    if (!isOpen) setIsActive(false);
  }, [isOpen]);

  const handleActive = () => {
    if (!isOpen) {
      handleOpen();
      setIsActive(!isActive);
    } else setIsActive(!isActive);
  };

  const handleDelete = (id: number) => {
    setChildrenData(childrenData.filter((item: any) => item.id !== id)); // 삭제된 아이템을 제외한 새로운 배열 생성
  };
  const renderAccordionItem = (item: AccordionItemType) => {
    if ('bigCategory' in item) {
      return <AccordionItemQ key={item.id} item={item} onDelete={handleDelete} />;
    } else if ('text' in item) {
      return <AccordionItemS key={item.id} item={item} />;
    } else {
      return <AccordionItemR key={item.rank} item={item} />;
    }
  };
  useEffect(() => {
    let items: AccordionItemType[] = [];
    switch (data.type) {
      case 'question':
        items = AccordionQData;
        break;
      case 'category':
        items = AccordionSData;
        break;
      case 'rank':
        items = rankData;
        break;
    }
    setChildrenData(items);
  }, [data.type, rankData]);

  const backCategory = () => {
    if (data.type === 'rank') {
      setCategory({ isSelect: false, title: '', data: [] });
    }
  };
  return (
    <AccordionBoxContainer>
      <Header onClick={handleActive} $isActive={isActive} $isOpen={isOpen}>
        <div onClick={backCategory}>{data.icon}</div>
        {isOpen && <HeaderText>{data.title}</HeaderText>}
        {isOpen ? isActive ? <IoIosArrowUp /> : <IoIosArrowDown /> : null}
      </Header>
      <ContentsContainer $isOpen={isOpen} $isActive={isActive}>
        {childrenData.map(renderAccordionItem)}
      </ContentsContainer>
    </AccordionBoxContainer>
  );
};

export default AccordionBox;
