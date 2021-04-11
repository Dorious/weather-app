import { useEffect } from 'react';
import { useAppContext } from '../context/app';
import Background from '../components/Background';
import CurrentWeather from '../components/CurrentWeather';
import SearchBar from '../components/SearchBar';

import * as S from './_app.styles';

export function Index(): JSX.Element {
  const {
    loading,
    geolocation,
    getGeolocation,
  } = useAppContext() || {};

  useEffect(() => {
    if(geolocation === undefined) {
      getGeolocation();
    }
  }, []);

  return (
    <>
      <S.AppContainer>
        <Background symbolCode="partialycloud_day" />
        <S.AppBody>
          <SearchBar disabled={loading} />
          <CurrentWeather />
        </S.AppBody>
      </S.AppContainer>
    </>
  );
};

export default Index;
