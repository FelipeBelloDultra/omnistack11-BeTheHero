import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Logon,
  Register,
  Profile,
  NewIncidents
} from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route
          path="/"
          exact
          component={Logon} />

        <Route
          path="/register"
          exact
          component={Register} />

        <Route
          path="/profile"
          exact
          component={Profile} />

        <Route
          path="/incidents/new"
          exact
          component={NewIncidents} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
