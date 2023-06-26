import ButtonAdd from "./ButtonAdd";
import {Meta,StoryObj} from '@storybook/react'

const meta = {
title:'AllButtons/buttonAdd',
  component: ButtonAdd,
  tags: ['autodocs'],
   parameters: {
    docs: {
		description: {
			component: "in this component i used tow class for modify size"
		}
	}
  },
} satisfies Meta<typeof ButtonAdd>

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
   size:'small'
  },
};
export const Larg: Story = {
  args: {
   size:'larg'
  },
};
