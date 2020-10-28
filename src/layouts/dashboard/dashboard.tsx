/* React imports */
import React from 'react';

/* Third-party imports */
import { Route, RouteChildrenProps, Switch } from 'react-router-dom';

/* Local imports */
import Navbar from './components/navbar';
import Footer from './components/footer';
import { pathnames } from '../../shared/routes/pathnames';

// Async imports
const Homepage = React.lazy(() => import('../../pages/homepage/homepage'));

const NavDashboardLayoutbar: React.FC<RouteChildrenProps> = ({ match }) => {
  return (
    <div className="d-flex flex-column container-fluid h-100 px-0">
      <Navbar />
      <main role="main" className="m-auto">
        <Switch>
          <Route path={`${match.url}${pathnames.homepage.path}`} component={Homepage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default NavDashboardLayoutbar;
