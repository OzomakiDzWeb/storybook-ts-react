import NewInvios from "./NewInvios";
import { Meta,StoryObj } from "@storybook/react";

const meta={
     title:'NewInvios/NewInvios',
     component:NewInvios,
     tags: ['autodocs'],
}satisfies Meta<typeof NewInvios>

export default meta;
type Story=StoryObj<typeof meta>
export const NewInviosLghit:Story={
     args:{
          theme:'Lghit'
     }
}
export const NewInviosDark:Story={
     args:{
          theme:'dark'
     }
}