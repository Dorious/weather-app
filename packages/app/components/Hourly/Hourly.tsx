import { memo } from 'react';
import { ForecastTimeStep } from '@dorious/weather-api/dist/locationforecast';

import Symbol from '../Symbol';

import * as S from './Hourly.styles';

export type HourlyProps = {
  timeseries: ForecastTimeStep[];
};

export default memo(function Hourly({
  timeseries: propTimeseries,
}: HourlyProps): JSX.Element {
  const timeseries = [...(propTimeseries || [])].splice(0, 24);
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
