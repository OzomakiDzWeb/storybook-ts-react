import Button from './Button';
import {Meta,StoryObj} from '@storybook/react'

const meta = {
title:'AllButtons/buttons',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const EditLghit: Story = {
  args: {
   size:'small',
   color:'edit',
   children:'Edit'
  },
};
export const EditDark: Story = {
  args: {
   size:'small',
   color:'editDark',
   children:'Edit'
  },
};
export const MarkAsPaid: Story = {
  args: {
   size:'larg',
   color:'MarkAsPaid',
   children:'Mark as Paid'
  },
};
export const Delet: Story = {
  args: {
   size:'small',
   color:'delet',
   children:'Delet'
  },
};
export const SaveAsDraftLight: Story = {
  args: {
   size:'larg',
   color:'draftLghit',
   children:'save as Draft'
  },
};
export const SaveAsDraftDark: Story = {
  args: {
   size:'larg',
   color:'draftDark',
   children:'save as Draft'
  },
};

