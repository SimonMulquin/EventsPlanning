import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Page, Header, LeftTool, RightTool, View, ViewNavigation, Calendar } from './ui/Layout/Components.jsx';
import theme from './configs/theme';

import Default from './ui/Pages/Default/main';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <Page>
            <Header />
            <LeftTool />
            <View>
              <ViewNavigation />
              <Calendar />
            </View>
            <RightTool />
          </Page>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
