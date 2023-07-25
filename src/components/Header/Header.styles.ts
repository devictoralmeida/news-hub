import styled from 'styled-components'

export const StyledHeaderContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
`

export const StyledHeader = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: clamp(0.5rem, 3vw, 1rem);
  padding-right: clamp(0.5rem, 3vw, 1rem);
  max-width: 76.875rem;

  .logo {
    width: 150px;
  }

  .right-container {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      cursor: pointer;
    }

    .logout {
      cursor: pointer;
      transition: 0.3s;
    }

    .logout:hover {
      transform: scale(1.15);
      transition: 0.3s;
    }
  }

  .user-first-letter {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--color-blue);
    color: var(--color-white);
    font-family: var(--font-paragraph);
    font-size: 0.875rem;
    font-weight: 700;
  }

  a {
    font-size: 0.875rem;
  }
`
