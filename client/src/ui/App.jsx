import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Page, Header, LeftTool, RightTool, View, ViewNavigation, ViewContent } from 'ui/Layout/Components.jsx';
import theme from 'configs/theme';

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
              <ViewContent />
            </View>
            <RightTool />
          </Page>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
