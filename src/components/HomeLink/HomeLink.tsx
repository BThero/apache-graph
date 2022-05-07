import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from './HomeLink.styled';

const HomeLink = (): JSX.Element => {
  return (
    <S.HomeLink to="/">
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Home</span>
    </S.HomeLink>
  );
};

export default HomeLink;
