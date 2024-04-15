import { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '.'

export default {
  title: 'CheckBox',
  component: CheckBox,
  args: {
    label: 'Serviços',
    description: 'Remember me'
  }
} as Meta

export const Default: StoryObj = {}
