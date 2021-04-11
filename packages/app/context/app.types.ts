import { ResponseResults } from '@dorious/weather-api/dist/opencage/api';
import { METJSONForecast } from '@dorious/weather-api/dist/locationforecast/api';

export type AppPosition = GeolocationPosition | GeolocationPositionError;

export type WeatherData = METJSONForecast & { location: ResponseResults };

export type AppState = {
  geolocation?: AppPosition;
  getGeolocation?: () => void;
  weatherData?: WeatherData;
  setWeatherData?: (weatherData: any) => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  searchLoading?: boolean;
  setSearchLoading?: (loading: boolean) => void;
};
