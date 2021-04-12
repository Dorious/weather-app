import { memo } from 'react';
import { WeatherData } from '../../context/app.types';
import Symbol from '../Symbol';
import * as S from './Hourly.styles';

export type HourlyProps = {
  weatherData: WeatherData;
};

export default memo(function Hourly({ weatherData }: HourlyProps): JSX.Element {
  const timeseries = [...weatherData?.properties.timeseries].splice(0, 24);
  return (
    <S.Container>
      {timeseries.map((series, idx) => {
        const temperature = Math.round(
          series.data.instant.details.air_temperature
        );
        const code = series.data.next_1_hours.summary.symbol_code;

        return (
          <S.Day key={series.time}>
            <S.Hour>
              {idx === 0 ? 'Now' : new Date(series.time).getHours()}
            </S.Hour>
            <Symbol code={code}></Symbol>
            <div>{temperature}&deg;</div>
          </S.Day>
        );
      })}
    </S.Container>
  );
});
