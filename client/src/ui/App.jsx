import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'configs/theme';

import rootReducer from 'api/redux';

import Layout from 'ui/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <ThemeProvider theme={theme} >
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
