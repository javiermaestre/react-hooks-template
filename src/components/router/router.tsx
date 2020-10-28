/* React imports */
import React from 'react';

/* Third-party imports */
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';

/* Local imports */
import createReduxStore from '../../store/store';
import ErrorFallback from '../../pages/common/error-fallback';
import { Loader } from '../../shared/components';
import { init } from '../../shared/utils/cookies';

init();

const MainRouteLayout = React.lazy(() => import('../../layouts/main-route'));
const store = createReduxStore();

const AppRouter: React.FC = () => (
  <ErrorBoundary FallbackComponent={({ error }) => <ErrorFallback error={error} />}>
    <React.Suspense fallback={<Loader centered />}>
      <Provider store={store}>
        <MainRouteLayout />
      </Provider>
    </React.Suspense>
  </ErrorBoundary>
);

export default AppRouter;
