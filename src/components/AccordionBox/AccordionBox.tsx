import { useState } from 'react';

import styled from '@emotion/styled';
import { GoSearch } from 'react-icons/go';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { AccordionQData } from '@test/data';

import AccordionItemQ from './AccordionItemQ';

interface SidebarComponentProps {
  isOpen: boolean;
}
const AccordionBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
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

const AccordionBox = ({ isOpen }: SidebarComponentProps) => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState(AccordionQData);
  const handleDelete = (id: number) => {
    setData(AccordionQData.filter((item) => item.id !== id)); // 삭제된 아이템을 제외한 새로운 배열 생성
  };
  return (
    <AccordionBoxContainer>
      <Header onClick={() => setIsActive(!isActive)} $isActive={isActive} $isOpen={isOpen}>
        <GoSearch />
        {isOpen && <HeaderText>최근 질문목록</HeaderText>}
        {isOpen ? isActive ? <IoIosArrowUp /> : <IoIosArrowDown /> : null}
      </Header>
      <ContentsContainer $isOpen={isOpen} $isActive={isActive}>
        {data.map((item) => {
          return <AccordionItemQ key={item.id} item={item} onDelete={handleDelete} />;
        })}
      </ContentsContainer>
    </AccordionBoxContainer>
  );
};

export default AccordionBox;
