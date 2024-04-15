'use client'

import styled, { css } from 'styled-components'

interface ContainerProps {
  isMobile?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${props => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;

    .container {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${props.isMobile && css``}
  `}
`

export const Content = styled.div`
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .bi {
    width: 1078px;
    height: 700px;
  }
`
