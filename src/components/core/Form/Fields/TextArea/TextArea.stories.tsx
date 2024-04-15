import { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '.'

export default {
  title: 'TextArea',
  component: TextArea,
  args: {
    label: 'Mensagem',
    placeholder: 'Deixe nos uma mensagem...'
  }
} as Meta

export const Default: StoryObj = {}
