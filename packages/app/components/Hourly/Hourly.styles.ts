import styled from 'styled-components';

export const Container = styled.section`
  border-top: 1px solid #fff;
  padding: 1rem 0;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
`;

export const Day = styled.div`
  display: inline-block;
  width: 5rem;

  > img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Hour = styled.div`
  margin-bottom: 2rem;
`;
