import * as S from './ButtonLink.styles'

interface Props {
  link: string
  mode: 'gray' | 'red' | 'white'
  size: 'sm' | 'md' | 'lg'
  children: string
}

export function ButtonLink({ link, children, mode, size }: Props) {
  return (
    <S.Container href={link} mode={mode} size={size}>
      {children}
    </S.Container>
  )
}
