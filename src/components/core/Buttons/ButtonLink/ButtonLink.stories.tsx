import { Meta, StoryObj } from '@storybook/react'
import { ButtonLink } from '.'

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  args: {
    link: 'https://www.google.com.br',
    children: 'Home',
    mode: 'gray'
  }
} as Meta

export const Default: StoryObj = {}
