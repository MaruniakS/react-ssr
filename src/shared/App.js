import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROUTES } from "./constants/Routes";
import { PATHS } from "./constants/Paths";

class App extends Component {
  render() {
    return (
        <div className="app">
          <main>
            <Switch>
              {
                ROUTES.map(({ path, component, exact = true }) => (
                  <Route
                      key={path}
                      path={path}
                      exact={exact}
                      component={component}
                  />))
              }
              <Redirect to={PATHS.HOME} />
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;
