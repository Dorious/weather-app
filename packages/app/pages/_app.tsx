import Head from 'next/head';
import type { AppProps } from 'next/app';

import { AppState } from '../context/app.types';
import { AppWrapper } from '../context/app';

import * as S from './_app.styles';

function Application({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppWrapper
      render={(state: AppState) => {
        const { weatherData } = state;
        const components = (weatherData?.location.components as any) || {};

        const city =
          components.city ||
          components.town ||
          components.village ||
          DEFAULT_EMPTY;
        const country = components.country || '';

        return (
          <>
            <Head>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Montserrat&family=Rubik&family=Ubuntu&display=swap"
                rel="stylesheet"
              />
              <title>
                {city && country ? `${city}, ${country} - ` : ''}WeatherApp
              </title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <S.GlobalStyle />
            <Component {...pageProps} />
          </>
        );
      }}
    ></AppWrapper>
  );
}

export default Application;
