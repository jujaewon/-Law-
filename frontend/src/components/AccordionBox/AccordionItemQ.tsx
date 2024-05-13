import styled from '@emotion/styled';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AQuestionType } from '@@types/custom';
import Button from '@components/Button/Button';
import GetCategoryIcon from '@utils/findIcon';
import { instance } from '@api/instance';

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
  font-size: 1.2rem;
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
    padding: 3px;
    transition: all 0.3s;
    background-color: ${(props) => props.theme.gray1};
    svg {
      color: white;
    }
    border-radius: 5px;
  }
`;
interface AccordionItemQProps {
  item: AQuestionType;
  onClick: () => void;
  onDelete: (id: number) => void;
}

const AccordionItemQ = ({ item, onClick, onDelete }: AccordionItemQProps) => {
  const { questionId, summary, lawType, category } = item;

  const handleDelete = async () => {
    onClick();
    instance.delete(`api/question/v1/${questionId}`).then((res) => {
      if (res && res.status === 200) {
        console.log('삭제 성공');
        onDelete(item.questionId);
      }
    });
  };
  return (
    <ContentContainer>
      <QuestionTitleWrapper>
        <QuestionTitle>{summary}</QuestionTitle>
        <DeleteButton onClick={handleDelete}>
          <FaRegTrashAlt size={'14'} />
        </DeleteButton>
      </QuestionTitleWrapper>
      <ButtonsWrapper>
        <Button type="button" color="secondary3" custom="category">
          {lawType}
        </Button>
        <Button type="button" color="secondary1" custom="category">
          {GetCategoryIcon(category)}
          {category}
        </Button>
      </ButtonsWrapper>
    </ContentContainer>
  );
};

export default AccordionItemQ;
