import React from 'react';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
