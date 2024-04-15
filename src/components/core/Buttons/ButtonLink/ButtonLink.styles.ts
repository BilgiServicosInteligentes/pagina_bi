import Link from 'next/link'
import styled, { css } from 'styled-components'

interface Props {
  mode: 'gray' | 'red' | 'white'
  size: 'sm' | 'md' | 'lg'
}

export const Container = styled(Link)<Props>`
  ${props => css`
    font-family: ${props.theme.font.family.base};
    cursor: pointer;

    transition: color 250ms ease;

    ${props.size === 'sm' &&
    css`
      font-size: ${props.theme.font.size.text.sm};
    `}

    ${props.size === 'md' &&
    css`
      font-size: ${props.theme.font.size.text.md};
    `}

    ${props.size === 'lg' &&
    css`
      font-size: ${props.theme.font.size.text.xl};
    `}

    ${props.mode === 'gray' &&
    css`
      color: ${props.theme.colors.gray.gray_600};
      font-weight: ${props.theme.font.weight.semi_bold};

      &:hover {
        color: ${props.theme.colors.gray.gray_900};
      }
    `}

    ${props.mode === 'red' &&
    css`
      color: ${props.theme.colors.primary.primary_500};
      font-weight: ${props.theme.font.weight.regular};

      &:hover {
        color: ${props.theme.colors.primary.primary_900};
      }
    `}

    ${props.mode === 'white' &&
    css`
      color: ${props.theme.colors.base.white};
      font-weight: ${props.theme.font.weight.regular};

      &:hover {
        color: ${props.theme.colors.base.black};
      }
    `}
  `}
`
