import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './Nav.styled';

const Nav = (): JSX.Element => {
  return (
    <S.Nav>
      <NavLink to="/targets" className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Investments Targets
      </NavLink>
      <NavLink to="/predicted" className={({ isActive }) => (isActive ? 'active' : undefined)}>
        Predicted Investments
      </NavLink>
    </S.Nav>
  );
};

export default Nav;
