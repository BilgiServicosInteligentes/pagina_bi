import { Meta, StoryObj } from '@storybook/react'
import { FaqItem } from '.'

export default {
  title: 'FaqItem',
  component: FaqItem,
  args: {
    question: 'Há uma avaliação gratuita disponível?',
    response:
      'Sim, você pode nos testar gratuitamente por 30 dias. Se desejar, forneceremos uma chamada de integração personalizada e gratuita de 30 minutos para que você comece a trabalhar o mais rápido possível.'
  }
} as Meta

export const Default: StoryObj = {}
