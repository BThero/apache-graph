import styled from 'styled-components';
import { device } from 'misc/device';

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    gap: 3rem;
  }
`;

export { Welcome };
