import styled, { css } from 'styled-components'

type StyledButtonProps = {
  ButtonSize: 'big' | 'medium' | 'small'
  ButtonStyle: 'solid' | 'outline'
}

const ButtonStyles = css<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  font-family: var(--font-paragraph);
  font-weight: 700;
  transition: 0.2s;
  z-index: 0;
  ${({ ButtonSize }) => {
    switch (ButtonSize) {
      case 'big':
        return css`
          width: 10.375rem;
          height: 4rem;
          font-size: 0.875rem;
        `
      case 'medium':
        return css`
          width: 9.0625rem;
          height: 3.375rem;
          font-size: 0.875rem;
        `
      case 'small':
        return css`
          width: 7rem;
          height: 2.6875rem;
          font-size: 1rem;
        `
    }
  }}

  ${({ ButtonStyle }) => {
    switch (ButtonStyle) {
      case 'solid':
        return css`
          background-color: var(--color-blue);
          color: var(--color-grey);
          opacity: 0.9;

          &:disabled {
            opacity: 0.7;
            background-color: var(--color-negative);
            cursor: not-allowed;
          }

          &:not(:disabled):hover {
            opacity: 1;
          }
        `
      case 'outline':
        return css`
          background-color: transparent;
          color: var(--color-blue);
          border: 1px solid var(--color-blue);
          min-width: 8.3125rem;

          a {
            color: var(--color-blue);
          }
        `
    }
  }}
`

export const StyledButton = styled.button<StyledButtonProps>`
  ${ButtonStyles}

  a {
    ${ButtonStyles}
  }
`
