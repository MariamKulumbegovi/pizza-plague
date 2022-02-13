import styled from 'styled-components';

export const BoundaryContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #4a4444;
  color: #f00b2e;
`;

export const BoundaryWrapper = styled.div`
  flex-direction: column;
  align-content: baseline;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #f00b2e;
`;

export const ErrorMessage = styled.p`
  font-size: 25px;
  color: #f00b2e;
`;
