import styled, { createGlobalStyle } from 'styled-components';
import { AbsoluteDiv } from '../components/styles';

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const AppContainer = styled(AbsoluteDiv)``;

export const AppBody = styled.div`
  max-width: 960px;
  margin: 0 auto;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
`;

export const AppError = styled.div`
  padding: 1rem 2rem;
  color: #fff;
  background: red;
  margin: 1rem;
  border-radius: 0.5rem;
`;
