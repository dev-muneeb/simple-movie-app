// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import AppNavigator from './router/AppNavigator';

const RootContainer = () => (
  <AppNavigator />
);

export default withRouter(RootContainer);
