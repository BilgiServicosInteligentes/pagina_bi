'use client'

import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${props => css`
    .custom-tooltip {
      background-color: ${props.theme.colors.gray.gray_700} !important;
      border-radius: ${props.theme.border.radius.sm} !important;
      color: ${props.theme.colors.base.white} !important;
      font-family: ${props.theme.font.family.base} !important;
      font-size: ${props.theme.font.size.text.xs} !important;
      font-weight: ${props.theme.font.weight.regular} !important;
      line-height: ${props.theme.line.height.text.xs} !important;

      padding: 1rem !important;

      z-index: 1099 !important;
    }
  `}
`
