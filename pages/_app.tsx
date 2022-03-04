import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components/Layout";
import { getTheme, ThemeType } from "../config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={getTheme(ThemeType.dark)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
