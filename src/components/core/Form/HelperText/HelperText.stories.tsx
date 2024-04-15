import { Meta, StoryObj } from '@storybook/react'
import { HelperText } from '.'

export default {
  title: 'HelperText',
  component: HelperText,
  args: {
    text: 'This is a error message.'
  }
} as Meta

export const Default: StoryObj = {}
