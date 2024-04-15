import * as S from './Label.styles'

interface Props {
  htmlFor?: string
  children: string
}

export function Label({ htmlFor, children }: Props) {
  return (
    <S.Container className="form-label" htmlFor={htmlFor}>
      {children}
    </S.Container>
  )
}

Label.defaultProps = {
  htmlFor: undefined,
  size: undefined
}
