import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${props => css`
    color: ${props.theme.colors.gray.gray_900};
    font-family: ${props.theme.font.family.base};
    font-size: ${props.theme.font.size.text.sm};
    font-weight: ${props.theme.font.weight.regular};
    line-height: ${props.theme.line.height.text.sm};
    margin-top: 0.6rem;
  `}
`
