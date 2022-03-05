import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  main, body {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.family};

    overflow: hidden;
  }

  main {
    display: flex;
    justify-content: center;

    height: 100vh;
    width: 100vw;

    overflow-y: scroll;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
