import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Click me!',
  },
};