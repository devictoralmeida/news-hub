import styled from 'styled-components'

export const StyledMainNewsContainer = styled.main`
  width: clamp(330px, 100%, 918px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 57.5rem;
  gap: 0.5rem;
  background-color: var(--color-white);
  margin: 1rem auto;

  img {
    border-radius: 1.5625rem;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    height: clamp(176px, 100%, 455px);
    max-height: 455px;
    margin-top: 1.5rem;
  }

  cite {
    font-style: normal;
  }
`
