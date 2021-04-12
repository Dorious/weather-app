import { SymbolCodes } from '../components/Symbol/Symbol';

import legendJson from './legend.json';

export const DEFAULT_TIMEOUT = 10000;

export function watchGeolocation(
  setPosition: (position: GeolocationPosition) => void,
  setError: (position: GeolocationPositionError) => void,
  options?: PositionOptions
): number {
  return navigator.geolocation.watchPosition(
    (position: GeolocationPosition) => setPosition(position),
    (positionError: GeolocationPositionError) => setError(positionError),
    { timeout: DEFAULT_TIMEOUT, ...options }
  );
}

export function translateSymbolCode(code: SymbolCodes, locale = 'en'): string {
  const [symbol] = code.split('_');

  return legendJson[symbol][`desc_${locale}`] || '';
}
