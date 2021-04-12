import styled from 'styled-components';

export const Container = styled.section`
  border-top: 1px solid #fff;
  padding: 2rem 0;
`;

export const Day = styled.div`
  max-width: 600px;
  padding: 0 2rem 1rem;
  font-size: 1.3rem;
  margin: 0 auto;
  align-items: center;
  display: flex;
`;

export const DayName = styled.h3`
  flex-grow: 1;
  margin: 0;
  padding: 0;
  font-weight: normal;
  white-space: nowrap;
`;

export const Symbol = styled.div`
  margin-right: 3rem;

  > img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Temperatures = styled.div`
  * {
    width: 2rem;
    display: inline-block;
  }
  b {
    font-weight: normal;
  }
  span {
    margin-left: 1rem;
    opacity: 0.6;
  }
`;
