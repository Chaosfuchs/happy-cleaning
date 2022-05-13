import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    display: grid;
    grid-template-rows:  1fr 4rem;
  }
  #__next {
    display: contents;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
