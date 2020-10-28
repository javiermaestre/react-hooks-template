/* React imports */
import React from 'react';

/* Third-party imports */
import clsx from 'clsx';

/* Local imports */
import { IconProps } from './types';

const Icon: React.FC<IconProps> = ({ classNames, icon, size, style }: IconProps): JSX.Element => {
  const className = clsx(`icon icon-${icon}`, size && `icon-${size}`, classNames);

  return (
    <span className={className} style={style}>
      <svg>
        <use xlinkHref={`#icon-${icon}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" />
      </svg>
    </span>
  );
};

export default Icon;
