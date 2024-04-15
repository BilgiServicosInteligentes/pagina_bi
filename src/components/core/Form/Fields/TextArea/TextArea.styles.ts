import styled, { css } from 'styled-components'

import { rgba } from 'polished'

interface Props {
  hasValue: boolean
  error?: boolean
  readOnly?: boolean
  disabled?: boolean
}

export const Container = styled.div<Props>`
  ${props => css`
    position: relative;
    width: 100%;

    .icon {
      position: absolute;
      right: 1%;
      top: 18%;
    }

    .input {
      position: relative;
    }

    &:focus-within {
      textarea {
        &:not([disabled]):not([readonly]) {
          box-shadow: 0px 0px 0px 4px ${props.theme.colors.primary.primary_100};
          border-color: ${props.theme.colors.primary.primary_300};
        }
      }
    }

    ${(props.readOnly || props.disabled) &&
    css`
      .text-area {
        textarea {
          cursor: default;
          pointer-events: none;
        }
      }
    `}

    .text-area {
      textarea::-ms-reveal,
      textarea::-ms-clear {
        display: none;
      }

      textarea {
        background-color: transparent;

        border-color: ${props.theme.colors.gray.gray_300};
        border-radius: ${props.theme.border.radius.sm};
        border-style: solid;
        border-width: ${props.theme.border.width.hairline};

        color: ${props.theme.colors.gray.gray_900};
        font-family: ${props.theme.font.family.base};
        font-size: ${props.theme.font.size.text.sm};
        font-weight: ${props.theme.font.weight.regular};
        line-height: ${props.theme.line.height.text.sm};

        padding: ${props.theme.spacing.spacing_3};

        min-height: 15.4rem;
        width: 100%;

        transition-property: background-color;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);

        ${props.error &&
        css`
          border-color: ${props.theme.colors.error.error_500};
        `}

        &::placeholder {
          color: ${props.theme.colors.gray.gray_500};
        }

        &:read-only {
          cursor: not-allowed;
          background-color: ${props.theme.colors.gray.gray_50};
        }

        &:focus-visible {
          outline: none;
        }

        &:disabled {
          cursor: not-allowed;
        }

        &::-webkit-scrollbar {
          width: 0.25rem;
        }

        &::-webkit-scrollbar-track {
          background-color: transparent;
          border-radius: ${props.theme.border.radius.sm};
          margin: 1rem;
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${rgba(
            props.theme.colors.gray.gray_800,
            props.theme.opacity.level.intense
          )};
          border-radius: ${props.theme.border.radius.sm};
        }
      }
    }
  `}
`
