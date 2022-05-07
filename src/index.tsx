import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'globalstyles';
import InvestmentsTargets from 'components/InvestmentsTargets';
import PredictedInvestments from 'components/PredictedInvestments';
import Welcome from 'components/Welcome';
import App from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="targets" element={<InvestmentsTargets />} />
            <Route path="predicted" element={<PredictedInvestments />} />
            <Route index element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
