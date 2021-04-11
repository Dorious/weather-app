import Head from 'next/head'

import type { AppProps /*, AppContext */ } from 'next/app';

import * as S from './_app.styles';

function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default Application;