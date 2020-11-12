/* React imports */
import React, { useState } from 'react';

/* Third-party imports */
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/* Local imports */
import { pathnames, Pathname } from '../../../shared/routes/pathnames';
import { getPublicURL } from '../../../shared/utils/url';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [showToggle, setShowToggle] = useState<boolean>(false);

  return (
    <nav className="navbar navbar-light bg-light d-flex align-items-center justify-content-between p-3 mb-3">
      <Link className="navbar-brand d-flex align-items-center" to={pathnames?.homepage?.getPath()}>
        <img
          className="d-flex d-inline-block align-top"
          alt="CF Can Vidalet"
          src={getPublicURL('logo.png')}
          width={30}
          height={30}
        />

        <span className="d-flex ml-3">{t('common.brand')}</span>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        onClick={() => setShowToggle(!showToggle)}
        onKeyPress={() => setShowToggle(!showToggle)}
        aria-label="Toggle"
      >
        Menu
      </button>
      <div className={clsx('collapse navbar-collapse', showToggle && 'show')}>
        <ul className="navbar-nav mx-auto">
          {Object.values(pathnames)
            .filter((route: Pathname) => route.display)
            .map((route: Pathname) => (
              <li className="nav-item" key={route.key}>
                <NavLink className="nav-link" activeClassName="active" to={route.getPath()}>
                  {t(route.title)}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
