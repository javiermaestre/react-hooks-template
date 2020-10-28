/* React imports */
import React from 'react';

/* Third-party imports */
import clsx from 'clsx';

/* Local imports */
import { LoaderProps } from './types';

const Loader: React.FC<LoaderProps> = ({ classNames, centered = false }: LoaderProps) => {
  const container = clsx(
    centered ? 'd-flex align-items-center justify-content-center h-100 w-100' : 'w-100 text-center',
    classNames
  );

  return (
    <div className={container}>
      <span className={clsx('spinner-border text-warning')}>
        <span className="icon-loader" />
      </span>
    </div>
  );
};

export default Loader;
