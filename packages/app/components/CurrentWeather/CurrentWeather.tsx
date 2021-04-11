import { memo, useMemo } from 'react';
import { decimalToSexagesimal } from 'geolib';

import { translateSymbolCode } from '../../utils/geolocation';
import { AppPosition, WeatherData } from '../../context/app.types';

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

  const [from, to] = useMemo<[number, number]>(() => {
    let from, to;

    if (timeseries) {
      for (let i = 0; i < 23; i += 1) {
        const { air_temperature } = timeseries[i]?.data.instant.details || {};
        if (!from || air_temperature > from) from = air_temperature;
        if (!to || air_temperature < to) to = air_temperature;
      }
    }

    return [from, to];
  }, [timeseries]);

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
      <S.Country>{country || <>&nbsp;</>}</S.Country>
      <S.Sky>
        {symbolCode ? translateSymbolCode(symbolCode) : <>&nbsp;</>}
      </S.Sky>
      <S.TemperatureContainer>
        <S.WeatherSymbol code={symbolCode} />
        <S.Temperature>
          {isNaN(airTemperature) ? (
            DEFAULT_EMPTY
          ) : (
            <>
              {airTemperature}&deg;{degrees}
            </>
          )}
        </S.Temperature>
      </S.TemperatureContainer>
      <S.FromTo>
        From: {Math.round(from)}&deg;{degrees} To: {Math.round(to)}&deg;
        {degrees}
      </S.FromTo>
    </S.Container>
  );
});
