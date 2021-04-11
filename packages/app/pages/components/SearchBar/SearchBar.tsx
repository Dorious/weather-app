import * as S from './SearchBar.styles';

export type SearchBarProps = {};

export default function SearchBar({}: SearchBarProps): JSX.Element {
  return (
    <S.SearchContainer>
      <S.SearchInput type="search" placeholder="Search city or coordinates..." />
    </S.SearchContainer>
  );
};