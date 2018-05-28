import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = ({ routes, withDefault }) => {
  /**
   * Takes an object of routes ({path:  render});
   * Creates a switch with all routes
   * Will use first as default if withDefault is true
   */
  const list = Object.keys(routes);
  return (
    <Switch>
      {list.map((route, index) => (
        <Route key={index} path={route} render={routes[route]} />
      ))}
      {withDefault ? 
        <Route render={routes[list[0]]} />  
      : null}
    </Switch>
  );
};

export default Routes;