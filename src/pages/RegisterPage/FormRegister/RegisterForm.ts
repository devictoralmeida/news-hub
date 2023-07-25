import styled from 'styled-components'

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 758px;
  width: 100%;

  h1,
  p {
    text-align: center;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  .input__container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    input {
      min-width: 350px;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 769px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;

      input {
        flex: 1;
        min-height: 56px;
      }
    }
  }

  button {
    height: 3.375rem;
    align-self: flex-end;
  }
`
