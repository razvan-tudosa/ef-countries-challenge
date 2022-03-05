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
  }

  main {
    display: flex;
    justify-content: center;
    padding-top: 70px; // to compensate for the header that it's fixed
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
