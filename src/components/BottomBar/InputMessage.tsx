import styled from '@emotion/styled';

const TextArea = styled.textarea`
  font-size: 16px;
  overflow: hidden;
  width: 100%;
  font-weight: normal;
  line-height: tight;
  color: black;
  opacity: 0.4;
`;

const MessageDisplay = styled.div`
  font-size: 20px;
  font-weight: normal;
  line-height: tight;
  color: black;
  opacity: 0.4;
  cursor: pointer;
`;

const RefreshButton = styled.div`
  position: absolute;
  left: 782px;
  display: inline-flex;
  align-items: end;
  justify-content: end;
  gap: 2.5px;
  border-radius: 60px;
  background-color: skyblue;
  padding: 2.5px;
  box-shadow: default;
  cursor: pointer;
`;

const Dot = styled.div`
  position: relative;
  width: 6px;
  height: 6px;
`;

const InputMessage = () => {
  return (
    <div>
      <TextArea id="autoresizetextarea" autoFocus />

      <MessageDisplay></MessageDisplay>

      <RefreshButton onClick={() => window.location.reload()}>
        <Dot />
      </RefreshButton>
    </div>
  );
};

export default InputMessage;
