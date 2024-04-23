import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@styles/theme';

import { ButtonProps } from './Button';

export const ButtonStyle = styled.button<ButtonProps>`
  border-radius: 10px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 2em;
    margin-right: 1em;
  }
  ${({ size }) => size && SIZES[size]}
  ${({ color }) => COLORS[color]}
`;

const SIZES = {
  full: css`
    width: 100%;
    padding: 1rem 2rem;
    font-size: 18px;
    font-weight: 700;
  `,
  large: css`
    width: 480px;
    padding: 19px 0px;
    font-size: 18px;
    font-weight: 700;
  `,
  medium: css`
    width: 220px;
    padding: 19px 0;
    font-size: 24px;
    font-weight: 700;
  `,
  medium_small: css`
    width: 168px;
    padding: 16px 0;
    font-size: 16px;
  `,
  small: css`
    width: 100px;
    padding: 10px 0;
    font-size: 16px;
  `,
};
const COLORS = {
  primaryonly: css`
    background-color: ${theme.primary};
    border: 1px solid ${theme.primary};
    color: ${theme.white};
  `,
  primary: css`
    background-color: ${theme.primary};
    border: 1px solid ${theme.primary};
    color: ${theme.white};
    &:hover:enabled {
      background-color: ${theme.secondary2};
      color: ${theme.primary};
    }
  `,
  gray: css`
    background-color: ${theme.gray2};
    border: 1px solid ${theme.gray2};
    color: ${theme.black};
    &:hover:enabled {
      border: 1px solid ${theme.gray1};
      color: ${theme.primary};
    }
  `,
  secondary1: css`
    background-color: ${theme.secondary1};
    color: ${theme.white};
    border: 1px solid ${theme.secondary1};
  `,
  secondary3: css`
    background-color: ${theme.secondary3};
    border: 2px solid ${theme.secondary2};
    color: ${theme.primary};
    font-weight: 700;
  `,
};
