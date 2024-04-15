import styled, { css } from 'styled-components'

interface Props {
  size: 'sm' | 'lg'
}

export const Container = styled.div<Props>`
  ${props => css`
    color: ${props.theme.colors.gray.gray_900};
    font-family: ${props.theme.font.family.base};
    font-weight: ${props.theme.font.weight.medium};

    ${props.size === 'sm' &&
    css`
      font-size: ${props.theme.font.size.text.lg};
      line-height: ${props.theme.line.height.text.lg};
    `}

    ${props.size === 'lg' &&
    css`
      font-size: ${props.theme.font.size.display.md};
      line-height: ${props.theme.line.height.display.md};

      @media (max-width: 576px) {
        font-size: ${props.theme.font.size.display.sm};
        line-height: ${props.theme.line.height.display.sm};
      }
    `}
  `}
`
