import Background from './components/Background';
import CurrentWeather from './components/CurrentWeather';
import SearchBar from './components/SearchBar';

import * as S from './_app.styles';

export function Index(): JSX.Element {
  return (
    <>
      <S.AppContainer>
        <Background symbolCode="partialycloud_day" />
        <S.AppBody>
          <SearchBar />
          <CurrentWeather />
        </S.AppBody>
      </S.AppContainer>
    </>
  );
};

export default Index;
