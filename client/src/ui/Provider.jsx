import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'configs/theme';
import rootReducer from 'api/redux';

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

export default ({children}) =>  (
  <ApolloProvider client={client}>
    <Provider store={createStore(rootReducer)}>
      <ThemeProvider theme={theme} >
        {children}
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);
