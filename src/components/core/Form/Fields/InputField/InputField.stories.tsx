import { Meta, StoryObj } from '@storybook/react'
import { InputField } from '.'

export default {
  title: 'InputField',
  component: InputField,
  args: {
    label: 'Primeiro Nome',
    placeholder: 'Digite seu primeiro nome'
  }
} as Meta

export const Default: StoryObj = {}
