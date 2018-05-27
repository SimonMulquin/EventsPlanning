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
                <Switch>
                  <Route path='/:viewContent' render={() => (
                    <ViewNavigation options={initialViewContents.map(({ withProps }, index) => ({
                      label: withProps.title,
                      to: `/${index}`
                    }))} />
                  )} />
                  <Route render={() => (
                    <ViewNavigation options={initialViewContents.map(({ withProps }, index) => ({
                      label: withProps.title,
                      to: `/${index}`
                    }))} />
                  )} />
                </Switch>
                <Switch>
                  <Route path='/:viewContent' component={ViewContent} />
                  <Route render={() => (
                    <ViewContent content={initialViewContents[0]} />
                  )} />
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
