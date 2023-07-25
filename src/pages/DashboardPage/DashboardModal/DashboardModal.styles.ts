import styled from 'styled-components'

export const ModalBox = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  min-height: 500px;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 9999998;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.3rem;

  h1 {
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    height: 50px;
    width: 100%;
  }

  button {
    align-self: flex-end;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 150px;
    margin-bottom: 0.5rem;
  }

  p {
    position: absolute;
    top: 21px;
    right: 21px;
    font-size: 21px;
    color: #00000080;
    cursor: pointer;
  }
`

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 1;
  background-color: rgba(85, 163, 255, 0.3);
`
