import { SymbolCodes } from '../components/Symbol/Symbol';

import legendJson from './legend.json';

export const DEFAULT_TIMEOUT = 5000;
export const DEFAULT_MAX_AGE = 0;

export function watchGeolocation(
  setPosition: (position: GeolocationPosition) => void,
  setError: (position: GeolocationPositionError) => void,
  options?: PositionOptions
): number {
  return navigator.geolocation.watchPosition(
    (position: GeolocationPosition) => setPosition(position),
    (positionError: GeolocationPositionError) => setError(positionError),
    { timeout: DEFAULT_TIMEOUT, maximumAge: DEFAULT_MAX_AGE, ...options }
  );
}

export function translateSymbolCode(code: SymbolCodes, locale = 'en'): string {
  const [symbol] = code.split('_');

  return legendJson[symbol][`desc_${locale}`] || '';
}
