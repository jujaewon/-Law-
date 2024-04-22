import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
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
