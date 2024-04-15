import { Meta, StoryObj } from '@storybook/react'
import { Label } from '.'

export default {
  title: 'Label',
  component: Label,
  args: {
    children: 'Primeiro Nome'
  }
} as Meta

export const Default: StoryObj = {}
