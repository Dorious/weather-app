import { WeatherSymbol } from '@dorious/weather-api/dist/locationforecast/api';
import { translateSymbolCode } from '../../utils/geolocation';

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
  if (!code) return null;
  const title = translateSymbolCode(code);
  return (
    <img
      src={`/symbols/svg/${code}.svg`}
      {...restProps}
      alt={title}
      title={title}
    />
  );
}
