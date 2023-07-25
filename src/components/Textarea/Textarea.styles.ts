import styled, { css } from 'styled-components'

interface IStyledTextarea {
  border?: 'none'
  error?: boolean
}

export const StyledTextarea = styled.textarea<IStyledTextarea>`
  font-family: var(--font-paragraph);
  width: 100%;
  padding: 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  border: ${({ border }) =>
    border === 'none' ? 'none' : '1px solid #00000080'};
  background-color: transparent;
  color: var(--color-black);
  font-weight: 400;
  font-size: 1.0625rem;
  transition: 0.2s;
  outline: none;
  resize: none;

  &::placeholder {
    color: #00000080;
  }

  &:focus {
    border: 1px solid var(--color-blue);
  }

  ${({ error }) => {
    if (error) {
      return css`
        border: 1px solid var(--color-negative);
      `
    }
  }}
`
