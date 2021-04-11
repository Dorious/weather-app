import { memo } from 'react'
import { AppPosition, WeatherData } from '../../context/app.types'
import { SymbolCodes } from '../Symbol/Symbol'
import { decimalToSexagesimal } from 'geolib'

import * as S from './CurrentWeather.styles'

const DEFAULT_EMPTY = '--'

export type CurrentWeatherProps = {
  code?: SymbolCodes
  geolocation?: AppPosition
  weatherData?: WeatherData
}

export default memo(function CurrentWeather({
  code = 'partlycloudy_day',
  geolocation,
  weatherData,
}: CurrentWeatherProps): JSX.Element {
  const { coords = null } = (geolocation as GeolocationPosition) || {}

  const city = (weatherData?.location.components as any)?.city || DEFAULT_EMPTY
  const country = (weatherData?.location.components as any)?.country || ''
  const lat = coords?.latitude
    ? decimalToSexagesimal(coords.latitude) +
      (coords.latitude > 0 ? ' N' : ' S')
    : DEFAULT_EMPTY
  const long = coords?.longitude
    ? decimalToSexagesimal(coords?.longitude) +
      (coords.longitude > 0 ? ' E' : ' W')
    : DEFAULT_EMPTY

  const timeseries = weatherData?.properties.timeseries || []
  const current = timeseries[0]
  const airTemperature = Math.round(
    current?.data.instant.details.air_temperature
  )

  // Units
  const degrees =
    weatherData?.properties.meta.units.air_temperature[0].toUpperCase() || ''

  return (
    <S.Container>
      <S.Coords>
        Lat: {lat.replace(/.([0-9]+)" ([NSWE])$/, '" $2')} Long:{' '}
        {long.replace(/.([0-9]+)" ([NSWE])$/, '" $2')}
      </S.Coords>
      <S.City>{city}</S.City>
      <S.Country>{country}</S.Country>
      <S.Sky>Partly cloudy</S.Sky>
      <S.TemperatureContainer>
        <S.WeatherSymbol code={code} />
        <S.Temperature>
          {isNaN(airTemperature) ? DEFAULT_EMPTY : airTemperature}&deg;{degrees}
        </S.Temperature>
      </S.TemperatureContainer>
      <S.FromTo>From: 15&deg; To: 15&deg;</S.FromTo>
    </S.Container>
  )
})
