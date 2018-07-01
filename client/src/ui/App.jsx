import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Provider from './Provider';
import Layout from 'ui/Layout/Layout';

export default () => (
  <Provider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
);
