import * as S from './Heading.styles'

import { ReactNode } from 'react'

interface Props {
  mode?: 'dark' | 'light'
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  children: string | number | ReactNode
}

export function Heading({ size, mode, className, children }: Props) {
  return (
    <S.Container mode={mode} size={size} className={className}>
      {children}
    </S.Container>
  )
}

Heading.defaultProps = {
  className: undefined,
  mode: undefined
}
