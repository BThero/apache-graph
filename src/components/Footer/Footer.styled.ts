import styled from 'styled-components';
import { device } from 'misc/device';

const Footer = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--lime);
  margin-top: auto;
  color: var(--white);

  @media ${device.desktop} {
    padding: 1rem 2rem;
  }
`;

const List = styled.ul`
  font-size: 1.5rem;
  list-style-type: none;
  display: flex;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: inline;
  transform: scale(1);
  color: var(--white);
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.2);
    color: var(--pink);
  }
`;

const ExternalLink = styled.a`
  &,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
  }
`;

const Me = styled.span`
  font-size: 1.25rem;
  font-family: 'InterSemiBold';
`;

export { Footer, List, ListItem, ExternalLink, Me };
