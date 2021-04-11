import * as S from './Background.styles';

export type BackgroundProps = {
  symbolCode: string;
};

export default function Background({symbolCode}: BackgroundProps): JSX.Element {
  const [sky, daytime] = symbolCode.split('_');

  return (
    <S.Background sky={sky} daytime={daytime} />
  );
};