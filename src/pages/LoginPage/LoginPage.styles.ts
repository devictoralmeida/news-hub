import styled from 'styled-components'

export const StyledMainLogin = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1100px;

  figure {
    min-width: 50%;
  }

  img {
    min-width: 100%;
    max-height: 550px;
    object-fit: cover;
    border-radius: 45px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;

    padding-top: 0;

    figure {
      display: none;
    }
  }
`
