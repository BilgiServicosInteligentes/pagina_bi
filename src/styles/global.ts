'use client'

import { createGlobalStyle, css } from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-multi-carousel/lib/styles.css'

import '../../public/fonts/styles.css'

export const GlobalStyles = createGlobalStyle`
  ${props => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      scroll-behavior: smooth;
      font-size: 62.5%;
    }

    /* html, body, #__next {
    height: 100%;
    
  } */

    body {
      font-family: ${props.theme.font.family.base};
      font-size: ${props.theme.font.size.text.xs};

      overflow-x: hidden;

      &.no-overflow {
        overflow: hidden;
        padding-right: 17px;
      }
    }

    ol,
    ul,
    dl {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    p {
      margin: 0;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: unset;
    }

    b {
      font-weight: 600;
    }

    strong {
      font-weight: 700;
    }
  `}

 
`
