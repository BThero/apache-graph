import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
import * as S from './App.styled';
import 'globalstyles/fonts.css';

const App = (): JSX.Element => {
  return (
    <S.App>
      <Header />
      <Outlet />
      <Footer />
    </S.App>
  );
};

export default App;
