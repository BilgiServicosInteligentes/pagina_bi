import { ReactNode } from 'react'

import * as S from './Subtitle.styles'

interface Props {
  size: 'sm' | 'lg'
  className?: string
  children: string | number | ReactNode
}

export function Subtitle({ size, className, children }: Props) {
  return (
    <S.Container size={size} className={className}>
      {children}
    </S.Container>
  )
}

Subtitle.defaultProps = {
  className: undefined
}
