import * as S from './CurrentWeather.styles';

export type CurrentWeatherProps = {};

export default function CurrentWeather({}: CurrentWeatherProps): JSX.Element {
  return (
    <S.Container>
      <S.Header>Gdynia</S.Header>
      <S.Sky>Partly cloudy</S.Sky>
      <S.TemperatureContainer>
        <S.WeatherSymbol code="partlycloudy_day" />
        <S.Temperature>15&deg;</S.Temperature>
      </S.TemperatureContainer>
      <S.FromTo>
        From: 15&deg; To: 15&deg;
      </S.FromTo>
    </S.Container>
  );
};