import styled from '@emotion/styled';
import { fn } from '@storybook/test';

import Icon from '@components/Icon/Icon';

import Button, { ButtonProps } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ButtonProps> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: 'large',
    color: 'primary',
    type: 'button',
  },
};
export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    type: 'button',
  },
};
export const MediumSmall: Story = {
  args: {
    size: 'medium_small',
    color: 'primary',
    type: 'button',
  },
};
export const Small: Story = {
  args: {
    size: 'small',
    color: 'primary',
    type: 'button',
  },
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WithIcon = {
  render: () => (
    <Wrapper>
      <Button type="button" size="medium_small" color="primary">
        <Icon icon="default" />
        상품 업로드
      </Button>
      <Button type="button" size="medium_small" color="primary">
        <Icon icon="default" />
        판매자 센터
      </Button>
    </Wrapper>
  ),
};
