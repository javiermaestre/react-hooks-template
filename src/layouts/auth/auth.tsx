/* React imports */
import React from 'react';

/* Third-party imports */
import { Switch, Route } from 'react-router-dom';

/* Local imports */
import Footer from './components/footer';

// Async imports
const Login = React.lazy(() => import('../../pages/login/login'));

const AuthLayout: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="container pt-5">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
