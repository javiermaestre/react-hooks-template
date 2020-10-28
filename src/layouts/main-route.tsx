/* React imports */
import React from 'react';

/* Third-party imports */
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

/* Local imports */
import useAuth from '../shared/hooks/useAuth';
import DashboardLayout from './dashboard/dashboard';
import Notification from '../components/notification/notification';
import PrivateRoute from './private-route';
import AuthLayout from './auth/auth';
import { pathnames } from '../shared/routes/pathnames';

const MainRouteLayout: React.FC = () => {
  const { token = 'tedst' } = useAuth();

  if (token && window?.location?.pathname?.indexOf('/login') !== -1) {
    window.location.pathname = pathnames.homepage.getPath();
  }

  if (token === '') {
    return <span>TEST XXX</span>;
  }

  return (
    <BrowserRouter>
      <Notification />
      <Switch>
        <PrivateRoute path="/app" component={DashboardLayout} token={token} />
        <Route render={() => (token ? <Redirect to={pathnames.homepage.getPath()} /> : <AuthLayout />)} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouteLayout;
