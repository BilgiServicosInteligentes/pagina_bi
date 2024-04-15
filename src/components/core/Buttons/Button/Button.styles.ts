// import { rgba } from 'polished'
import styled, { css } from 'styled-components'

interface Props {
  styles: 'primary' | 'secondary' | 'tertiary'
  button_size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  mode?: 'square'
  display?: 'block'
}

export const Wrapper = styled.div<Omit<Props, 'button_size'>>`
  ${props => css`
    ${props.display !== 'block' &&
    css`
      width: fit-content;
    `}

    &:focus-within {
      button {
        ${props.styles === 'primary' &&
        css`
          &:not([disabled]) {
            box-shadow: 0px 0px 0px 4px
              ${props.theme.colors.primary.primary_100};
          }
        `}

        ${props.styles === 'secondary' &&
        css`
          &:not([disabled]) {
            box-shadow: 0px 0px 0px 4px ${props.theme.colors.gray.gray_100};
          }
        `}
      }
    }
  `}
`

export const Container = styled.button<Props>`
  ${props => css`
    background-color: transparent;
    border-color: transparent;
    border-radius: ${props.theme.border.radius.sm};

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props.button_size === 'sm' || props.button_size === 'md') &&
    css`
      padding: 0 1.6rem;
      gap: 0.8rem;

      line-height: ${props.theme.line.height.text.sm};

      div {
        font-size: ${props.theme.font.size.text.sm};
      }
    `}

    ${(props.button_size === 'lg' || props.button_size === 'xl') &&
    css`
      padding: 0 2rem;
      gap: 0.8rem;

      line-height: ${props.theme.line.height.text.md};

      div {
        font-size: ${props.theme.font.size.text.md};
      }
    `}

    ${props.button_size === 'xxl' &&
    css`
      padding: 0 3.2rem;
      gap: 1.2rem;

      line-height: ${props.theme.line.height.text.lg};

      div {
        font-size: ${props.theme.font.size.text.lg};
      }
    `}

    ${props.button_size === 'sm' &&
    css`
      ${props.mode === 'square'
        ? css`
            width: 3.6rem;
            height: 3.6rem;
          `
        : css`
            width: 16.6rem;
            height: 3.6rem;
          `}
    `}

    ${props.button_size === 'md' &&
    css`
      ${props.mode === 'square'
        ? css`
            width: 4rem;
            height: 4rem;
          `
        : css`
            width: 16.6rem;
            height: 4rem;
          `}
    `}

    ${props.button_size === 'lg' &&
    css`
      ${props.mode === 'square'
        ? css`
            width: 4.4rem;
            height: 4.4rem;
          `
        : css`
            width: 18.5rem;
            height: 4.4rem;
          `}
    `}

    ${props.button_size === 'xl' &&
    css`
      ${props.mode === 'square'
        ? css`
            width: 4.8rem;
            height: 4.8rem;
          `
        : css`
            width: 18.5rem;
            height: 4.8rem;
          `}
    `}

    ${props.button_size === 'xxl' &&
    css`
      ${props.mode === 'square'
        ? css`
            width: 6rem;
            height: 6rem;
          `
        : css`
            width: 23.6rem;
            height: 6rem;
          `}
    `}

    ${props.display === 'block' &&
    css`
      width: 100%;
    `}

    span {
      margin-right: 0.5rem;
    }

    div {
      font-family: ${props.theme.font.family.base};
      font-weight: ${props.theme.font.weight.semi_bold};
    }

    transition: background-color 250ms ease;

    ${props.styles === 'primary' &&
    css`
      background-color: ${props.theme.colors.primary.primary_500};
      color: ${props.theme.colors.base.white};

      &:hover:not([disabled]) {
        background-color: ${props.theme.colors.primary.primary_600};
      }

      &:disabled {
        border-color: transparent;
        background-color: ${props.theme.colors.primary.primary_200};
      }
    `}

    ${props.styles === 'secondary' &&
    css`
      background-color: ${props.theme.colors.base.white};
      color: ${props.theme.colors.gray.gray_700};
      border-width: 0.1rem;
      border-style: solid;
      border-color: ${props.theme.colors.gray.gray_300};

      &:hover:not([disabled]) {
        background-color: ${props.theme.colors.gray.gray_50};
      }

      &:disabled {
        color: ${props.theme.colors.gray.gray_300};
      }
    `}

    ${props.styles === 'tertiary' &&
    css`
      background-color: none;
      color: ${props.theme.colors.gray.gray_600};

      &:hover:not([disabled]) {
        background-color: ${props.theme.colors.gray.gray_50};
      }

      &:disabled {
        color: ${props.theme.colors.gray.gray_300};
      }
    `}

    &:focus {
      outline: unset;
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`
