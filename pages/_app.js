/** @jsxImportSource theme-ui */

import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from '../src/components/Nav'
import { MainProvider } from "../contexts/MainContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MainProvider>
          <Component {...pageProps} />
        </MainProvider>
      </div>
    </ThemeProvider>
  );
}

