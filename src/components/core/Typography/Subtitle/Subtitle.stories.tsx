import { Meta, StoryObj } from '@storybook/react'
import { Subtitle } from '.'

export default {
  title: 'Subtitle',
  component: Subtitle,
  args: {
    size: 'lg',
    children:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.'
  }
} as Meta

export const Default: StoryObj = {}
