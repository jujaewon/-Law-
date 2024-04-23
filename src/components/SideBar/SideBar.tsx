import { useState } from 'react';

import styled from '@emotion/styled';
import { LuPlusSquare } from 'react-icons/lu';

import AccordionBox from '@components/AccordionBox/AccordionBox';
import Button from '@components/Button/Button';

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: 56px;
  height: 100%;
  padding: ${(props) => (props.$isOpen ? '30px 15px' : '30px 0px 30px 5px')};
  background: ${(props) => props.theme.white};
  border-right: 2px solid ${(props) => props.theme.gray1};
  transition: width 0.4s;
  width: ${(props) => (props.$isOpen ? '300px' : '56px')};
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-items: flex-start;
  height: 64px;
  padding: 30px 0px;
  margin-bottom: 20px;
`;

const OpenButton = styled.button<{ $isOpen: boolean }>`
  width: 44px;
  height: 72px;
  transition: width 0.6s;
  margin-left: ${(props) => (props.$isOpen ? '0' : '6px')};
  margin-right: 1rem;
  color: ${(props) => props.theme.primary};
`;

const SidebarContentsContainer = styled.nav<{ $isOpen: boolean }>`
  display: grid;
  gap: 25px;
  button {
    width: ${(props) => (props.$isOpen ? '100%' : '44px')};
    transition: width 0.4s;
    svg {
      margin: 0;
    }
  }
`;

const StyledParagraph = styled.p<{ $isOpen: boolean }>`
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  transition: 0.3s;
  color: ${(props) => props.theme.primary};
  font-size: 2rem;
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContainer $isOpen={isOpen}>
      <Header>
        <OpenButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          🧠
        </OpenButton>
        <StyledParagraph $isOpen={isOpen}>헬로(Law)</StyledParagraph>
      </Header>
      <SidebarContentsContainer $isOpen={isOpen}>
        <Button type="button" color="primary" size="full">
          <LuPlusSquare color="white" />
          {isOpen && '질문하기'}
        </Button>
        <AccordionBox isOpen={isOpen} />
      </SidebarContentsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
