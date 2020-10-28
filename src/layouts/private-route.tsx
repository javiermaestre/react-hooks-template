/* React imports */
import React from 'react';

/* Third-party imports */
import { Route } from 'react-router-dom';

/* Local imports */
import AuthLayout from './auth/auth';

interface Props {
  path?: string;
  component: React.FC<any>;
  token: string;
}

const PrivateRoute: React.FC<Props> = ({ path, component: Component, token }) => {
  return <Route path={path} render={({ match }) => (token ? <Component match={match} /> : <AuthLayout />)} />;
};

export default PrivateRoute;
