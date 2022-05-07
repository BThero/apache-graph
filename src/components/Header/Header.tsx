import React from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './Header.styled';

const Title = new Map([
  ['/targets', 'Investments Targets'],
  ['/predicted', 'Predicted Investments']
]);

const Header = (): JSX.Element => {
  const location = useLocation();

  return (
    <S.Header>
      <S.Title>{Title.get(location.pathname) ?? 'Welcome'}</S.Title>
    </S.Header>
  );
};

export default Header;
