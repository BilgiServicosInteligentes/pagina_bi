'use client'

import styled, { css } from 'styled-components'

interface ContainerProps {
  isMobile?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${props => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #333;
    justify-content: center;

    ${props.isMobile && css``}
  `}
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 40px;
  align-items: center;
  justify-content: center;

  .bi {
    width: 1000px;
    height: 654px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% calc(100% - 36px),
      0% calc(100% - 36px)
    );
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1035px) {
    .bi {
      width: 760px;
      height: 511px;
    }
  }
  @media (max-width: 768px) {
    .bi {
      width: 500px;
      height: 357px;
    }
  }

  @media (max-width: 520px) {
    .bi {
      width: 350px;
      height: 268px;
    }
  }
`
