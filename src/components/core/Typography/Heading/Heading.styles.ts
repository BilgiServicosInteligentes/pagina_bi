import styled, { css } from 'styled-components'

interface Props {
  mode?: 'dark' | 'light'
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
}

export const Container = styled.div<Props>`
  ${props => css`
    ${(!props.mode || props.mode === 'dark') &&
    css`
      color: ${props.theme.colors.gray.gray_900};
    `}

    ${props.mode === 'light' &&
    css`
      color: ${props.theme.colors.gray.gray_500};
    `}

    font-family: ${props.theme.font.family.base};
    font-weight: ${props.theme.font.weight.semi_bold};
    line-height: ${props.theme.line.height.display.md};

    ${props.size === 'xxs' &&
    css`
      font-size: ${props.theme.font.size.text.sm};
      line-height: ${props.theme.line.height.text.sm};
    `}

    ${props.size === 'xs' &&
    css`
      font-size: ${props.theme.font.size.text.lg};
      line-height: ${props.theme.line.height.text.lg};
    `}

    ${props.size === 'sm' &&
    css`
      font-size: ${props.theme.font.size.text.xl};
      line-height: ${props.theme.line.height.text.xl};
    `}

    ${props.size === 'md' &&
    css`
      font-size: ${props.theme.font.size.display.md};

      @media (max-width: 576px) {
        font-size: ${props.theme.font.size.display.sm};
      }
    `}

    ${props.size === 'lg' &&
    css`
      font-size: ${props.theme.font.size.display.lg};

      @media (max-width: 576px) {
        font-size: ${props.theme.font.size.display.md};
      }
    `}
  `}
`
