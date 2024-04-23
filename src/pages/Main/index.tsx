/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Button from '@components/Button/Button';
import { breakpoints } from '@styles/breakpoints';
const ThemeTest1 = styled.div`
  color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

// 메인 헤더 스타일
const Header = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 20px;
  text-align: center;

  ${breakpoints.sm} {
    font-size: 14px;
  }

  ${breakpoints.md} {
    font-size: 18px;
  }

  ${breakpoints.lg} {
    font-size: 22px;
  }
`;

// 버튼 스타일
const buttonStyle = css`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;

  ${breakpoints.sm} {
    font-size: 12px;
  }

  ${breakpoints.md} {
    font-size: 14px;
  }

  ${breakpoints.lg} {
    font-size: 16px;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

function Main() {
  return (
    <div>
      <Header>메인 헤더</Header>
      <ThemeTest1>
        <Button type="button" color="primary" />
      </ThemeTest1>
    </div>
  );
}

export default Main;
