import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import { getTheme, ThemeType } from "../config/theme";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={getTheme(ThemeType.dark)}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
