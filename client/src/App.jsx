import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Default from './ui/Pages/Default/main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Default} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
