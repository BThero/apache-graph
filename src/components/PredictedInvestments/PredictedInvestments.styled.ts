import styled from 'styled-components';
import { device } from 'misc/device';

const Wrapper = styled.main`
  padding: 1rem;

  @media ${device.tablet} {
    padding: 2rem;
  }

  @media ${device.desktop} {
    padding: 2rem 4rem;
  }
`;

export { Wrapper };
