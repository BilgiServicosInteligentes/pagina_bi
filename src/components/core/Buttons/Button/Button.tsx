import * as S from './Button.styles'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  button_size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  children: React.ReactNode
  styles: 'primary' | 'secondary' | 'tertiary'
  mode?: 'square'
  type?: 'button' | 'submit' | 'reset'
  display?: 'block'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({
  button_size,
  children,
  styles,
  mode,
  type,
  display,
  disabled,
  className,
  onClick
}: Props) {
  return (
    <S.Wrapper styles={styles} display={display}>
      <S.Container
        type={type || 'button'}
        styles={styles}
        button_size={button_size}
        mode={mode}
        display={display}
        disabled={disabled}
        className={className}
        onClick={onClick}
      >
        {mode !== 'square' && <div>{children}</div>}
      </S.Container>
    </S.Wrapper>
  )
}

Button.defaultProps = {
  type: undefined,
  display: undefined,
  disabled: undefined,
  onClick: undefined
}
