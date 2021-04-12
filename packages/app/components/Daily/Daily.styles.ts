import styled from 'styled-components';

export const Container = styled.section`
  border-top: 1px solid #fff;
  padding: 1rem 0;
`;

export const Day = styled.div`
  max-width: 600px;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  margin: 0 auto;
  align-items: center;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  :last-child {
    border-bottom: 0;
  }
`;

export const DayName = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: normal;
  white-space: nowrap;
  min-width: 10rem;
`;

export const Symbol = styled.div`
  margin-right: 3rem;
  flex-grow: 1;

  > img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Temperatures = styled.div`
  white-space: nowrap;
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
