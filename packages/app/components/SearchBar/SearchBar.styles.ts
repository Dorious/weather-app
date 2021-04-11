import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: 1rem;
  box-sizing: border-box;
  position: relative;
`

export const SearchInput = styled.input`
  width: 100%;
  color: #000;
  border: 0;
  border-radius: 0.4rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 6px 10px rgba(0,0,0, 0.08);
  transition: all 0.5s ease;
  box-sizing: border-box;
  appearance: none;
  font-size: inherit;

  :focus {
    outline: none;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 10px 20px rgba(0,0,0, 0.15);
  }
`;