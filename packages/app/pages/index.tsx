import { useAppContext } from '../context/app';
import Background from '../components/Background';
import CurrentWeather from '../components/CurrentWeather';
import SearchBar from '../components/SearchBar';

import * as S from './_app.styles';
import { useWeatherData } from '../hooks/useWeatherData';

export function Index(): JSX.Element {
  const { geolocation } = useAppContext();

  const errorMessage =
    geolocation &&
    geolocation instanceof GeolocationPositionError &&
    geolocation.message;

  const { weatherData } = useWeatherData(geolocation);
  const symbolCode =
    weatherData?.properties.timeseries[0].data.next_1_hours.summary
      .symbol_code || '';

  return (
    <>
      <S.AppContainer>
        <Background symbolCode={symbolCode} />
        <S.AppBody>
          <SearchBar disabled />
          {errorMessage ? <S.AppError>{errorMessage}</S.AppError> : null}
          <CurrentWeather geolocation={geolocation} weatherData={weatherData} />
        </S.AppBody>
      </S.AppContainer>
    </>
  );
}

export default Index;
