import styled, { css } from 'styled-components'

interface Props {
  readOnly?: boolean
  disabled?: boolean
}

export const Wrapper = styled.div`
  position: relative;
`

export const Container = styled.label<Props>`
  ${props => css`
    padding-left: 1.5rem;
    position: relative;
    user-select: none;

    ${!props.readOnly && !props.disabled
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: default;
          pointer-events: none;
        `}

    .description {
      color: ${props.theme.colors.gray.gray_700};
      font-family: ${props.theme.font.family.base};
      font-size: ${props.theme.font.size.text.md};
      font-weight: ${props.theme.font.weight.medium};
      line-height: ${props.theme.line.height.text.md};

      padding-left: ${props.theme.spacing.spacing_3};
    }

    input {
      opacity: 0;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;

      height: 2.2rem;
      width: 2.2rem;

      border-color: ${props.theme.colors.gray.gray_300};
      border-radius: ${props.theme.border.radius.sm};
      border-style: solid;
      border-width: ${props.theme.border.width.hairline};

      transition-property: background-color, border-color;
      transition-duration: 0.6s;
      transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);

      ${(props.readOnly || props.disabled) &&
      css`
        background-color: ${props.theme.colors.gray.gray_100};
      `}

      &:hover {
        ${!props.disabled &&
        !props.readOnly &&
        css`
          background-color: ${props.theme.colors.primary.primary_100};
          border-color: ${props.theme.colors.primary.primary_300};
        `}
      }

      z-index: 1;
    }

    &:focus-within {
      .checkmark {
        ${!props.disabled &&
        !props.readOnly &&
        css`
          box-shadow: 0px 0px 0px 4px ${props.theme.colors.primary.primary_100};
          border-color: ${props.theme.colors.primary.primary_300};
        `}
      }
    }

    .icon {
      position: absolute; /* Posicionamento absoluto em relação ao body ou container relativo */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* Centraliza exatamente no meio */
      z-index: 2;
    }
  `}
`
