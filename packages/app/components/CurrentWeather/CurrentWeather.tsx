import { memo } from 'react';
import { AppPosition, WeatherData } from '../../context/app.types';
import { decimalToSexagesimal } from 'geolib';

import * as S from './CurrentWeather.styles';

const DEFAULT_EMPTY = '--';

export type CurrentWeatherProps = {
  geolocation?: AppPosition;
  weatherData?: WeatherData;
};

export default memo(function CurrentWeather({
  geolocation,
  weatherData,
}: CurrentWeatherProps): JSX.Element {
  const { coords = null } = (geolocation as GeolocationPosition) || {};

  const city = (weatherData?.location.components as any)?.city || DEFAULT_EMPTY;
  const country = (weatherData?.location.components as any)?.country || '';
  const lat = coords?.latitude
    ? decimalToSexagesimal(coords.latitude) +
      (coords.latitude > 0 ? ' N' : ' S')
    : DEFAULT_EMPTY;
  const long = coords?.longitude
    ? decimalToSexagesimal(coords?.longitude) +
      (coords.longitude > 0 ? ' E' : ' W')
    : DEFAULT_EMPTY;

  const timeseries = weatherData?.properties.timeseries || [];
  const current = timeseries[0];
  const airTemperature = Math.round(
    current?.data.instant.details.air_temperature
  );
  const symbolCode = current?.data.next_1_hours.summary.symbol_code;

  // Units
  const degrees =
    weatherData?.properties.meta.units.air_temperature[0].toUpperCase() || '';

  return (
    <S.Container>
      <S.Coords>
        Lat: {lat.replace(/.([0-9]+)" ([NSWE])$/, '" $2')} Long:{' '}
        {long.replace(/.([0-9]+)" ([NSWE])$/, '" $2')}
      </S.Coords>
      <S.City>{city}</S.City>
      <S.Country>{country}</S.Country>
      <S.Sky>Partly cloudy</S.Sky>
      <S.TemperatureContainer>
        <S.WeatherSymbol code={symbolCode} />
        <S.Temperature>
          {isNaN(airTemperature) ? DEFAULT_EMPTY : airTemperature}&deg;{degrees}
        </S.Temperature>
      </S.TemperatureContainer>
      <S.FromTo>
        From: 15&deg;{degrees} To: 15&deg;{degrees}
      </S.FromTo>
    </S.Container>
  );
});
