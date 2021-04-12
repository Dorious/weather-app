import { memo, useMemo } from 'react';
import { ForecastTimeStep } from '@dorious/weather-api/dist/locationforecast';

import * as S from './Daily.styles';
import Symbol from '../Symbol';

export type DailyProps = {
  timeseries: ForecastTimeStep[];
};

export default memo(function Daily({ timeseries }: DailyProps): JSX.Element {
  const dailyTimeseries = useMemo(() => {
    if (!timeseries) return null;

    const seriesByDate: Record<number, ForecastTimeStep> = {};

    timeseries.forEach((series) => {
      const date = new Date(new Date(series.time).toDateString()).getTime();

      if (!seriesByDate[date]) {
        seriesByDate[date] = series;
      } else {
        if (!seriesByDate[date].data.next_1_hours)
          seriesByDate[date].data.next_1_hours = series.data.next_1_hours;
        if (!seriesByDate[date].data.next_6_hours)
          seriesByDate[date].data.next_6_hours = series.data.next_6_hours;
      }
    });

    return seriesByDate;
  }, [timeseries]);

  if (!dailyTimeseries) return null;

  return (
    <S.Container>
      {Object.values(dailyTimeseries).map((series) => {
        const { air_temperature_max, air_temperature_min } =
          series.data.next_6_hours?.details || {};
        const { symbol_code } =
          series.data.next_1_hours?.summary ||
          series.data.next_6_hours?.summary ||
          {};

        return (
          <S.Day key={series.time}>
            <S.DayName>
              {new Date(series.time).toLocaleString('en-us', {
                weekday: 'long',
              })}
            </S.DayName>
            <S.Symbol>
              <Symbol code={symbol_code} />
            </S.Symbol>
            <S.Temperatures>
              <b>{Math.round(air_temperature_max)}&deg;</b>{' '}
              <span>{Math.round(air_temperature_min)}&deg;</span>
            </S.Temperatures>
          </S.Day>
        );
      })}
    </S.Container>
  );
});
