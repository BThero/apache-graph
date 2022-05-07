import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  width: fit-content;

  &,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
  }

  transition: all 0.25s ease-in-out;
  transform: translateX(0);

  &:hover {
    transform: translateX(1rem);
    color: var(--pink);
  }

  margin-bottom: 2rem;
`;

export { HomeLink };
