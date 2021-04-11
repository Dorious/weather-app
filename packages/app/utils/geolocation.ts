export const DEFAULT_TIMEOUT = 2000

export function watchGeolocation(
  setPosition: (position: GeolocationPosition) => void,
  setError: (position: GeolocationPositionError) => void
): number {
  return navigator.geolocation.watchPosition(
    (position: GeolocationPosition) => setPosition(position),
    (positionError: GeolocationPositionError) => setError(positionError),
    { timeout: DEFAULT_TIMEOUT }
  )
}
