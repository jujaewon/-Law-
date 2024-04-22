import { ButtonProps } from './Button';
import { css } from '@emotion/react';
import theme from '@styles/theme';
import styled from '@emotion/styled';

export const ButtonStyle = styled.button<ButtonProps>`
  border-radius: 5px;
  color: var(--color-white);
  ${({ size }) => size && SIZES[size]}
  ${({ color }) => COLORS[color]}
`;

export const SIZES = {
  full: css`
    width: 100%;
    padding: 19px 0px;
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
export const COLORS = {
  primary: css`
    background-color: ${theme.primary};
    &:disabled {
      background-color: var(--content-color-light);
    }
  `,
  gray: css`
    background-color: var(--color-white);
    color: var(--content-color-dark);
    border: 1px solid var(--content-color-light);
    &:hover:enabled {
      border: 1px solid var(--content-color-dark);
      color: var(--color-black);
    }
    &:disabled {
      background-color: var(--content-color-light);
    }
  `,
  secondary1: css`
    background-color: var(--content-color-light);
    color: var(--content-color-dark);
    border: 1px solid var(--content-color-dark);
    &:hover:enabled {
      background-color: var(--content-color-dark);
      color: var(--color-white);
    }
    &:disabled {
      background-color: var(--content-color-light);
    }
  `,
  secondary2: css`
    background-color: var(--content-color-dark);
    color: var(--color-white);
    border: 1px solid var(--content-color-dark);
    &:hover:enabled {
      background-color: var(--color-white);
      color: var(--content-color-dark);
    }
    &:disabled {
      background-color: var(--content-color-light);
    }
  `,
};

// export const Container = styled.button<Omit<ButtonProps, 'children'>>`
//   text-align: center;
//   cursor: pointer;
//   transition: all 0.5s ease-in-out;
//   cursor: pointer;
//   ${({ border }) =>
//     border
//       ? css`
//           border: 1px solid #808080;
//         `
//       : css`
//           border: none;
//         `}
//   ${({ radius }) =>
//     radius === 'square'
//       ? css`
//           border-radius: 0.3rem;
//         `
//       : radius === 'circle'
//         ? css`
//             border-radius: 2rem;
//           `
//         : css`
//             border-radius: 0;
//           `}

//         ${({ size }) =>
//     size === 'xs'
//       ? css`
//           padding: 0.4rem 0.8rem;
//           font-size: 0.8rem;
//         `
//       : size === 'sm'
//         ? css`
//             padding: 0.5rem 1.5rem;
//             font-size: 1rem;
//           `
//         : size === 'md'
//           ? css`
//               padding: 0.7rem 2rem;
//               font-size: 1.2rem;
//             `
//           : css`
//               padding: 1rem 2.5rem;
//               font-size: 1.2rem;
//             `}
//   ${themeVariants}

//   background-color: ${({ color }) => color && colors[color]};
//   color: ${({ textColor }) => textColor && colors[textColor]};
// `;
