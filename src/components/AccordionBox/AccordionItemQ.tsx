import styled from '@emotion/styled';
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuPlusSquare } from 'react-icons/lu';

import { AQuestionType } from '@@types/custom';
import Button from '@components/Button/Button';

const QuestionTitleWrapper = styled.div`
  padding: 5px 0px 5px 0px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex: 1;
  position: relative;
`;

const QuestionTitle = styled.div`
  color: ${(props) => props.theme.black};
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  position: relative;
  width: 188px;
  height: 17px;
`;

const ButtonsWrapper = styled.div`
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;
const ContentContainer = styled.div`
  background: #ffffff;
  border-style: solid;
  border-color: ${(props) => props.theme.gray1};
  border-width: 0px 0px 2px 0px;
  padding: 12px 20px 12px 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  height: 125px;
  position: relative;
`;
const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 4px;
  width: auto !important;
  svg {
    color: ${(props) => props.theme.gray1};
  }

  &:hover {
    background-color: red;
    svg {
      color: white;
    }
    border-radius: 5px;
  }
`;
interface AccordionItemQProps {
  item: AQuestionType;
  onDelete: (id: number) => void;
}
// const AccordionItemQ = ({ item, onDelete }: AccordionItemQProps) => {
const AccordionItemQ = ({ item }: AccordionItemQProps) => {
  const { title, bigCategory, smallCategory } = item;

  const handleDelete = async () => {
    // console.log('삭제', id);
    // onDelete(id);
    // try {
    //   const response = await axios.delete(`https://your-api-url.com/items/${id}`);
    //   if (response.status === 200) {
    //     onDelete(item.id); // 부모 컴포넌트에 삭제를 알림
    //   }
    // } catch (error) {
    //   console.error('Failed to delete the item', error);
    //   alert('Failed to delete the item'); // 삭제 실패 시 알림
    // }
  };
  return (
    <ContentContainer>
      <QuestionTitleWrapper>
        <QuestionTitle>{title}</QuestionTitle>
        <DeleteButton onClick={handleDelete}>
          <FaRegTrashAlt size={'14'} />
        </DeleteButton>
      </QuestionTitleWrapper>
      <ButtonsWrapper>
        <Button type="button" color="secondary3" custom="category">
          <LuPlusSquare color="blue" />
          {bigCategory}
        </Button>
        <Button type="button" color="secondary1" custom="category">
          <LuPlusSquare color="white" />
          {smallCategory}
        </Button>
      </ButtonsWrapper>
    </ContentContainer>
  );
};

export default AccordionItemQ;
