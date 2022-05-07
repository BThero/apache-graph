import styled from 'styled-components';
import { device } from 'misc/device';

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 100%;
  flex-wrap: nowrap;
  gap: 5%;

  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
  }
`;

export { Welcome };
