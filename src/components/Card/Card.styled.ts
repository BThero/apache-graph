import styled from 'styled-components';
import { device } from 'misc/device';

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  padding: 1rem;
  gap: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media ${device.desktop} {
    transform: scale(1);
    transition: all 0.25s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Title = styled.h2`
  font-family: 'InterBold';
`;

export { Card, Image, Title };
