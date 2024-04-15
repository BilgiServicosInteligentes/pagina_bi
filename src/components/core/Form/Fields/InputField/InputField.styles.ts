import styled, { css } from 'styled-components'

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
      top: 20%;
    }

    .input {
      position: relative;
    }

    input::-ms-reveal,
    input::-ms-clear {
      display: none;
    }

    &:focus-within {
      input {
        &:not([disabled]):not([readonly]) {
          box-shadow: 0px 0px 0px 4px
              ${props.theme.colors.primary.primary_100};
          border-color: ${props.theme.colors.primary.primary_300};   
        }
      }
    }

    input {
      background-color: transparent;

      border-color: ${props.theme.colors.gray.gray_300};
      border-radius: ${props.theme.border.radius.sm};
      border-style: solid;
      border-width: ${props.theme.border.width.hairline};

      color: ${props.theme.colors.gray.gray_900};
      font-family: ${props.theme.font.family.base};
      font-size: ${props.theme.font.size.text.md};
      line-height: ${props.theme.line.height.text.md}
      font-weight: ${props.theme.font.weight.regular};

      padding: ${props.theme.spacing.spacing_3};

      width: 100%;

      transition-property: background-color, border-color;
      transition-duration: 0.6s;
      transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);

      ${
        props.error &&
        css`
          border-color: ${props.theme.colors.error.error_500};
        `
      }

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
    }   
  `}
`
