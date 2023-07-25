import styled from 'styled-components'

export const StyledFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
  text-align: center;
  font-family: var(--font-paragraph);

  gap: 1rem;

  input {
    width: 100%;
    max-width: 370px;
  }

  h2,
  p {
    margin-bottom: 1rem;
  }

  div {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    height: 54px;
    width: 100%;
    max-width: 370px;
    margin-bottom: 1rem;
  }

  .redirect {
    color: var(--color-blue);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 1rem 0;

    h2 {
      margin: 0;
    }

    button {
      height: 3.37rem;
      min-width: 48%;
    }
  }

  @media (max-width: 536px) {
    div {
      min-width: 100%;
    }

    p {
      min-height: 54px;
    }

    button {
      width: 100%;
    }
  }
`
