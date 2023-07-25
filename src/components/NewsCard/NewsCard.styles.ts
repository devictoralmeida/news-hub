import styled, { css } from 'styled-components'

interface IStyledNewsCard {
  isAlone?: boolean
}

export const StyledNewsCard = styled.li<IStyledNewsCard>`
  list-style: none;
  width: clamp(330px, 48%, 585px);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 747px) {
    flex: 1;
    width: 100%;
  }

  ${({ isAlone }) => {
    if (isAlone) {
      return css`
        max-width: 585px;
        justify-self: flex-start;
        align-self: flex-start;
      `
    }
  }}

  img {
    border-radius: 1.5625rem;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    height: clamp(176px, 30vw, 254px);
    max-height: 254px;
    transition: 0.2s;
    margin-bottom: 0.8rem;
  }

  img:hover {
    transform: scale(1.01);
    transition: 0.2s;
  }

  a {
    font-family: var(--font-paragraph);
    font-weight: 400;
    font-size: 15px;
    color: var(--color-blue);
    margin-top: 2rem;
  }

  cite {
    font-style: normal;
  }

  a:hover {
    text-decoration: underline;
  }
`
