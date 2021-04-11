import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes';
import { createContext, useContext, useState } from 'react';

export type AppState = {
  loading?: boolean,
  searchQuery?: string,
  setSearchQuery?: (query: string) => void; 
  geolocation?: GeolocationCoordinates;
  getGeolocation?: () => void;
};

export const initialState = {
  loading: false,
  searchQuery: '',
  setSearchQuery: () => {},
  geolocation: undefined,
  getGeolocation: () => {
    console.log('grr');
  }
};

const AppContext = createContext<AppState>(initialState);

export function AppWrapper({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const appState = {
    ...initialState,
    loading,
    searchQuery,
    setSearchQuery,
  };

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}