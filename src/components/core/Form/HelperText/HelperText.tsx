import * as S from './HelperText.styles'

interface Props {
  className?: string
  text: string
}

export function HelperText({ className, text }: Props) {
  return <S.Container className={className}>{text}</S.Container>
}

HelperText.defaultProps = {
  className: undefined
}
