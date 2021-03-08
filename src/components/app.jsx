import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Weather from './weather';

const App = () => (
  <div className="app">
    <Header />
    <div className="app__content">
      <Switch>
        <Route
          exact
          path="/"
          component={Weather}
        />
      </Switch>
    </div>
  </div>
);

export default App;
