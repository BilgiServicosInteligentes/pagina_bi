import { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from '.'

export default {
  title: 'Paragraph',
  component: Paragraph,
  args: {
    size: 'sm',
    children:
      'Descomplicamos a gestão para garantir resultados consistentes e previsíveis em cada aspecto crucial do seu negócio. '
  }
} as Meta

export const Default: StoryObj = {}
