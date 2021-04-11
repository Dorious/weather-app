import React, { createContext, useContext, useEffect, useState } from 'react';

import { watchGeolocation } from '../utils/geolocation';
import { AppPosition, AppState } from './app.types';

export const initialState = {
  searchQuery: '',
  searchLoading: false,
  geolocation: undefined,
};

const AppContext = createContext<AppState>(initialState);

export const AppWrapper: React.FC = ({ children }): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [geolocation, setGeolocation] = useState<AppPosition>(undefined);
  const [weatherData, setWeatherData] = useState<any>(undefined);

  const appState = {
    ...initialState,
    geolocation,
    searchQuery,
    setSearchQuery,
    searchLoading,
    setSearchLoading,
    weatherData,
    setWeatherData,
  };

  useEffect(() => {
    if (!geolocation) {
      watchGeolocation(
        (position: GeolocationPosition) => setGeolocation(position),
        (positionError: GeolocationPositionError) =>
          setGeolocation(positionError)
      );
    }
  }, [geolocation]);

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};

export function useAppContext(): AppState {
  return useContext(AppContext) || initialState;
}
