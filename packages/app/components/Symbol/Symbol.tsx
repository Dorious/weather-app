import { WeatherSymbol } from '@dorious/weather-api/dist/locationforecast/api';

export type SymbolCodes = `${WeatherSymbol}`;

export type SymbolProps = {
  code: SymbolCodes;
  width?: number;
  height?: number;
};

export default function Symbol({
  code,
  ...restProps
}: SymbolProps): JSX.Element {
  return <img src={`/symbols/svg/${code}.svg`} {...restProps} />;
}
