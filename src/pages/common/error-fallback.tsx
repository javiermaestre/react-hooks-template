/* React imports */
import React from 'react';

/* Local imports */
import useAuth from '../../shared/hooks/useAuth';
import ErrorImage from '../../static/images/error.gif';
import Footer from '../../layouts/dashboard/components/footer';
import Logo from '../../static/images/logo.png';
import { pathnames } from '../../shared/routes/pathnames';
import { Button, ButtonVariant } from '../../shared/components';

interface Props {
  error?: Error;
}

const ErrorFallback: React.FC<Props> = ({ error }) => {
  const { token } = useAuth();

  function handleGoBack() {
    window.location = token ? pathnames.homepage.getPath() : pathnames.login.getPath();
  }

  return (
    <div className="page">
      <div className="page-topbar" />
      <div className="page-navbar" />
      <div className="page-container">
        <div id="page-header" className="page-header" />
        <div className="page-container">
          <div className="d-flex align-items-center flex-column">
            <div className="text-center mb-4">
              <img className="logo-auth" alt="CF Can Vidalet" src={Logo} />
            </div>
            <div className="text-center">
              <h1 className="heading-lg">Something went wrong!</h1>
              <p className="subtitle text-danger">
                <strong>Error:</strong> {error.message}
              </p>
            </div>
            <div className="text-center mb-4">
              <img src={ErrorImage} alt="error" />
            </div>
            <div className="text-center">
              <Button variant={ButtonVariant.Primary} onClick={handleGoBack} onKeyPress={handleGoBack}>
                Return to the previous page
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ErrorFallback;
