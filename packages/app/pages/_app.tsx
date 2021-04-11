import Head from 'next/head';
import type { AppProps } from 'next/app';

import { AppWrapper } from '../context/app';

import * as S from './_app.styles';

function Application({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppWrapper>
      <Head>
        <title>Weather App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.GlobalStyle />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default Application;
