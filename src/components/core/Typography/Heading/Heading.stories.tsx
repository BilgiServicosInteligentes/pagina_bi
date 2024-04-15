import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Inteligência para Crescimento Estratégico',
    size: 'lg'
  }
} as Meta

export const Default: StoryObj = {}
