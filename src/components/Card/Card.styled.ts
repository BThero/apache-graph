import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  padding: 1rem;
  gap: 1rem;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
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
