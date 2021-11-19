import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default Router;
