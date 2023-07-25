import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-grey: #F3F3F3;
    --color-blue: #55A3FF;
    --color-sucess: #3fe864;
    --color-negative: #e83f5b;

    --font-title: 'Lora', serif;
    --font-paragraph: 'Inter', sans-serif;
  }

  body {
    height: 100vh;
    width: 99vw;
    background-color: var(--color-white);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  button{
    cursor: pointer;
    background: transparent;
    border: none;
  }

  ul, ol{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  input, textarea{
    border: 0;
    background: transparent;
    outline: none;
  }

  :focus {
    outline: 0;
  }

  .toast-sucess,
  .toast-error {
    z-index: 200;
  }

  .toast-sucess,
  .toast-error {
    background-color: var(--color-grey-2);
    color: var(--color-black);
    font-family: 'Inter', sans-serif;
  }

  .toast-sucess img,
  .toast-sucess svg {
    fill: var(--color-sucess);
    width: 28px;
    height: 28px;
  }

  .toast-error img,
  .toast-error svg {
    fill: var(--color-negative);
    width: 28px;
    height: 28px;
  }
`
