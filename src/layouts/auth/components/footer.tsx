/* React imports */
import React from 'react';

/* Third-party imports */
import { useTranslation } from 'react-i18next';

/* Local imports */
import Package from '../../../../package.json';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <div className="py-3 text-center">
        <small>
          {t('footer.message')}
          <a rel="noreferrer" target="_blank" href="https://github.com/jmaestree">
            {t('footer.powered-by')}
          </a>
        </small>
        <small className="text-subtle d-block">{t('common.version', { version: Package.version })}</small>
      </div>
    </div>
  );
};

export default Footer;
