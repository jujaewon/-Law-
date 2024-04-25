import { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import { FaRegStar } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { LuPlusSquare } from 'react-icons/lu';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { VscSignOut } from 'react-icons/vsc';

import AccordionBox from '@components/AccordionBox/AccordionBox';
import Avatar from '@components/Avatar/Avatar';
import Button from '@components/Button/Button';
import useModal from '@hooks/useModal';
import { getCategoryTitle, getCategorySelect } from '@store/sidebarStore';

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: 56px;
  height: auto;
  min-height: 100%;
  position: relative;
  padding: ${(props) => (props.$isOpen ? '30px 15px' : '30px 0px 30px 5px')};
  background: ${(props) => props.theme.white};
  border-right: 2px solid ${(props) => props.theme.gray1};
  transition: width 0.4s;
  width: ${(props) => (props.$isOpen ? '300px' : '56px')};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.secondary1};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.secondary3};
  }

  position: relative;
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
  width: 100%;
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

const UserContainer = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  padding: 12px 8px;
  gap: 12px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  height: 40px;
`;
const UserNameWrapper = styled.div`
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  position: relative;
  flex: 1;
`;
const QUESTION_DATA = {
  title: '최근 질문목록',
  icon: <GoSearch />,
  type: 'question',
};
const CATEGORY_DATA = {
  title: '실시간 인기 법률',
  icon: <FaRegStar />,
  type: 'category',
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSelect, setIsSelect] = useState(false);
  const { openModal } = useModal();

  const test = () => {
    openModal({
      type: 'test',
      props: {
        title: ' confirm 모달',
        message: '컨펌하시겠습니까?',
        btnText: 'yes',
        onSubmit: () => window.alert('submit'),
      },
    });
  };
  const selectStatus = getCategorySelect();
  useEffect(() => {
    setIsSelect(selectStatus);
  }, [selectStatus]);

  const PICK_DATA = {
    title: getCategoryTitle(),
    icon: <RiArrowGoBackLine />,
    type: 'rank',
  };
  return (
    <SidebarContainer $isOpen={isOpen}>
      <Header>
        <OpenButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          🧠
        </OpenButton>
        <StyledParagraph $isOpen={isOpen}>헬로(Law)</StyledParagraph>
      </Header>
      <SidebarContentsContainer $isOpen={isOpen}>
        <Button type="button" color="primary" size="full" onClick={test}>
          <LuPlusSquare color="white" />
          {isOpen && '질문하기'}
        </Button>
        <AccordionBox data={QUESTION_DATA} isOpen={isOpen} />
        {isSelect ? (
          <AccordionBox data={PICK_DATA} isOpen={isOpen} />
        ) : (
          <AccordionBox data={CATEGORY_DATA} isOpen={isOpen} />
        )}
      </SidebarContentsContainer>
      <UserContainer>
        <Avatar />
        <UserNameWrapper>이가영</UserNameWrapper>
        <VscSignOut color="red" />
      </UserContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
