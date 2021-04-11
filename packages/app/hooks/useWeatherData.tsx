import { useEffect } from 'react';
import { usePrevious } from 'use-hooks';
import { useFetch } from 'use-http';

import { useAppContext } from '../context/app';
import { AppPosition, WeatherData } from '../context/app.types';

export function useWeatherData(
  geolocation: AppPosition
): {
  weatherData: WeatherData;
} {
  const { weatherData, setWeatherData } = useAppContext();
  const prevGeolocation = usePrevious<AppPosition>(geolocation);

  const { get, loading } = useFetch<WeatherData>(`/api/weather`);

  useEffect(() => {
    const { latitude, longitude } =
      (geolocation as GeolocationPosition)?.coords || {};
    const { latitude: oldLat, longitude: oldLong } =
      (prevGeolocation as GeolocationPosition)?.coords || {};

    if (!loading && (oldLat !== latitude || oldLong !== longitude)) {
      get(`?lat=${latitude}&long=${longitude}`).then((response) => {
        setWeatherData(response.data);
      });
    }
  }, [geolocation]);

  return { weatherData };
}
