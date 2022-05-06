import styled from 'styled-components';
import { device } from 'misc/device';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  a {
    color: var(--blue);
  }

  .active {
    color: var(--red);
  }

  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export { Nav };
