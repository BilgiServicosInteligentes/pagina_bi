import { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'
import { BeakerIcon } from '@heroicons/react/24/solid'

export default {
  title: 'Icon',
  component: Icon,
  args: {
    size: 'lg',
    mode: 'primary',
    IconRender: BeakerIcon
  }
} as Meta

export const Default: StoryObj = {}
