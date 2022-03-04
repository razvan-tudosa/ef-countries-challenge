import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import ThemeManager from "../config/theme/ThemeManager";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeManager>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeManager>
  );
}

export default MyApp;
