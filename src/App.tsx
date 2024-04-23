import styled from '@emotion/styled';

import Button from '@components/Button/Button';

const ThemeTest1 = styled.div`
  color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <>
      <ThemeTest1>
        <Button type="button" color="primary" />
      </ThemeTest1>
    </>
  );
}

export default App;
