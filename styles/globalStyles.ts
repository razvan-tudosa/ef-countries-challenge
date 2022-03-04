import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  main, body {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.text};
  }

  main {
    display: flex;
    justify-content: center;
    padding-top: 70px; // to compensate for the header that it's fixed
  }
`;
