import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from 'configs/theme';
import rootReducer from 'api/redux';
import initialViewContents from 'configs/initialViewContents';
import { Page, Header, LeftTool, RightTool, View, ViewNavigation, ViewContent } from 'ui/Layout/Components.jsx';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <ThemeProvider theme={theme} >
          <BrowserRouter>
            <Page>
              <Header />
              <LeftTool />
              <View>
                <ViewNavigation options={initialViewContents.map(({ content }, index) => ({
                  label: content.title,
                  to: `/${index}`
                }))} />
                <Switch>
                  <Route path='/:viewContent' component={ViewContent} />
                </Switch>
              </View>
              <RightTool />
            </Page>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
