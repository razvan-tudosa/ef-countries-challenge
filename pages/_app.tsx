import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import ThemeManager from "../config/theme/ThemeManager";
import { GlobalStyles } from "../styles/globalStyles";

import "semantic-ui-css/semantic.min.css";

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
