import ButtonAddItme from './ButtonAddItmes'
import { Meta,StoryObj } from '@storybook/react'

 const meta={
     title:'AllButtons/ButtonAddItmes',
     component:ButtonAddItme,
     tags: ['autodocs'],
     parameters: {
    docs: {
		description: {
			component: "this button take widht:80% from his countainer"
		}
	}
  },
} satisfies Meta<typeof ButtonAddItme>
export default meta
type Story=StoryObj<typeof meta>

export const ButtonAddItmesLghit:Story={
     args:{
          theme:'lghit'
     }
}
export const ButtonAddItmesDark:Story={
     args:{
          theme:'dark'
     }
}