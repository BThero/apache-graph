import React from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './Header.styled';

const Header = (): JSX.Element => {
  const location = useLocation();

  return (
    <S.Header>
      <S.Title>
        {location.pathname === '/targets' ? 'Investments targets' : 'Predicted Investments'}
      </S.Title>
    </S.Header>
  );
};

export default Header;
