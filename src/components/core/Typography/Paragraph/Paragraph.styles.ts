import styled, { css } from 'styled-components'

interface Props {
  size: 'sm' | 'md' | 'lg'
}

export const Container = styled.div<Props>`
  ${props => css`
    color: ${props.theme.colors.gray.gray_600};
    font-family: ${props.theme.font.family.base};
    font-weight: ${props.theme.font.weight.regular};

    ${props.size === 'sm' &&
    css`
      font-size: ${props.theme.font.size.text.md};
      line-height: ${props.theme.line.height.text.md};
    `}

    ${props.size === 'md' &&
    css`
      font-size: ${props.theme.font.size.text.lg};
      line-height: ${props.theme.line.height.text.lg};
    `}

    ${props.size === 'lg' &&
    css`
      font-size: ${props.theme.font.size.text.xl};
      line-height: ${props.theme.line.height.text.xl};
    `}
  `}
`
