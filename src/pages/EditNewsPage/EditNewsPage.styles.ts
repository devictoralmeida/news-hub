import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey);
  width: 100vw;

  input {
    height: 40px;
    border: none;
    background-color: var(--color-white);
    width: 100%;
  }

  textarea {
    border: none;
    resize: none;
    height: 12.125rem;
    background-color: var(--color-white);
    width: 100%;
  }

  label {
    font-weight: 700;
    font-size: 1rem;
  }
`

export const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 280px;
  max-width: 550px;
  min-width: 100%;
  padding: 10px;

  .main__container {
    display: flex;
    flex-direction: column;
    max-width: 820px;
    width: 100%;

    margin: 0 auto;

    padding: 50px 20px;
  }

  label {
    font-size: 1rem;
    font-weight: 700;
  }

  input {
    background-color: var(--color-white);
    border: transparent;
  }

  textarea {
    width: 100%;
    height: 280px;
    background-color: var(--color-white);
    border: transparent;
  }

  .button__container {
    margin: 1.5rem 0;
  }
`
