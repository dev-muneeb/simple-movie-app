// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/main';
import Contact from '../pages/contact';

const AppNavigator = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/contact" component={Contact} exact />
  </Switch>
);

export default AppNavigator;
