import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body  {
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }
  
  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }

  button {
    border: none;   
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`
