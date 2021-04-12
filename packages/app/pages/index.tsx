import { useAppContext } from '../context/app';
import Background from '../components/Background';
import CurrentWeather from '../components/CurrentWeather';
import Hourly from '../components/Hourly';
import { useWeatherData } from '../hooks/useWeatherData';

import * as S from './_app.styles';

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
          {errorMessage ? <S.AppError>{errorMessage}</S.AppError> : null}
          <CurrentWeather geolocation={geolocation} weatherData={weatherData} />
          {weatherData ? <Hourly weatherData={weatherData} /> : null}
        </S.AppBody>
      </S.AppContainer>
    </>
  );
}

export default Index;
