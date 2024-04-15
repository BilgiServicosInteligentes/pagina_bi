'use client'

import styled, { css } from 'styled-components'

interface Props {
  open: boolean
  visible?: boolean
}

export const Container = styled.div<Props>`
  ${props => css`
    display: flex;
    justify-content: space-between;

    padding: ${props.theme.spacing.spacing_2};

    .icon {
      margin-top: 0.2rem;
      cursor: pointer;
    }

    &:focus-within,
    &:focus {
      outline: none;
      border: solid;
      border-width: ${props.theme.border.width.hairline};
      border-color: ${props.theme.colors.gray.gray_300};
      border-radius: ${props.theme.border.radius.sm};
      box-shadow: 0px 0px 0px 4px ${props.theme.colors.gray.gray_100};
    }
  `}
`

export const Body = styled.div<Props>`
  ${props => css`
    visibility: hidden;
    opacity: 0;
    padding-top: 5px;

    overflow: ${props.visible ? 'visible' : 'hidden'};
    max-height: 0;
    width: 80%;

    transition:
      visibility 0s,
      opacity 250ms ease,
      max-height 250ms linear;

    ${props.open &&
    css`
      visibility: visible;
      opacity: 1;
      max-height: 1000px;
    `}
  `}
`

export const Divider = styled.div`
  ${props => css`
    border-top: solid;
    border-width: ${props.theme.border.width.hairline};
    border-color: ${props.theme.colors.gray.gray_100};

    width: 100%;

    ${props.className?.includes('top') &&
    css`
      margin-bottom: ${props.theme.spacing.spacing_4};
    `}

    ${props.className?.includes('bottom') &&
    css`
      margin-top: ${props.theme.spacing.spacing_4};
    `}
  `}
`
