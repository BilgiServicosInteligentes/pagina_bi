'use client'

import styled, { css } from 'styled-components'
import { rgba } from 'polished'

interface Props {
  mode?: 'primary' | 'gray' | 'hard-gray' | 'error'
  size: 'sm' | 'md' | 'lg' | 'xs'
  disabled?: boolean
}

export const Container = styled.div<Props>`
  ${props => css`
    user-select: none;

    ${
      props.size === 'xs' &&
      css`
        width: 1.8rem;
        height: 1.8rem;
      `
    }

    ${
      props.size === 'sm' &&
      css`
        width: 2.1rem;
        height: 2.1rem;
      `
    }

    ${
      props.size === 'md' &&
      css`
        width: 2.4rem;
        height: 2.4rem;
      `
    }

    ${
      props.size === 'lg' &&
      css`
        width: 3.6rem;
        height: 3.6rem;
      `
    }

    .icon {
      ${
        props.disabled
          ? css`
              ${!props.mode || props.mode === 'primary'
                ? css`
                    color: ${rgba(
                      props.theme.colors.primary.primary_700,
                      props.theme.opacity.level.light
                    )};
                  `
                : css`
                    color: ${rgba(
                      props.theme.colors.gray.gray_700,
                      props.theme.opacity.level.light
                    )};
                  `}
            `
          : css`
              ${(!props.mode || props.mode === 'primary') &&
              css`
                color: ${props.theme.colors.primary.primary_500};
              `}

              ${props.mode === 'gray' &&
              css`
                color: ${props.theme.colors.gray.gray_400};
              `}

              ${props.mode === 'hard-gray' &&
              css`
                color: ${props.theme.colors.gray.gray_900};
              `}

              ${props.mode === 'error' &&
              css`
                color: ${props.theme.colors.error.error_500};
              `}
            `
      }
  `}
`
