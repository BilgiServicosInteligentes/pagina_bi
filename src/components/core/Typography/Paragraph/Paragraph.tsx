import { ReactNode } from 'react'

import * as S from './Paragraph.styles'

interface Props {
  size: 'sm' | 'md' | 'lg'
  className?: string
  children: string | number | ReactNode
}

export function Paragraph({ size, className, children }: Props) {
  return (
    <S.Container size={size} className={className}>
      {children}
    </S.Container>
  )
}

Paragraph.defaultProps = {
  className: undefined
}
