import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav';
import ChartWrapper from 'components/ChartWrapper/ChartWrapper';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
