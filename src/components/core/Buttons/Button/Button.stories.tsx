import { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    button_size: 'sm',
    styles: 'primary',
    children: 'Button'
  }
} as Meta

export const Default: StoryObj = {}
