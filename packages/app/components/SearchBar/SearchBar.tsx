import * as S from './SearchBar.styles';

export type SearchBarProps = {
  disabled?: boolean;
};

export default function SearchBar({
  disabled
}: SearchBarProps): JSX.Element {
  return (
    <S.SearchContainer>
      <S.SearchInput 
        type="search" 
        placeholder="Search city or coordinates..." 
        disabled={disabled}
      />
    </S.SearchContainer>
  );
};