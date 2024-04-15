import styled, { css } from 'styled-components'

interface Props {
  size?: 'sm' | 'lg'
}

export const Container = styled.label<Props>`
  ${props => css`
    display: flex;

    margin-bottom: 0.6rem;

    font-family: ${props.theme.font.family.base};
    font-weight: ${props.theme.font.weight.medium};
    font-size: ${props.theme.font.size.text.sm};
    line-height: ${props.theme.line.height.text.sm};
    color: ${props.theme.colors.gray.gray_700};
  `}
`
