/* React imports */
import React from 'react';

/* Third-party imports */
import clsx from 'clsx';

/* Local imports */
import { ButtonProps } from './types';
import { Icon } from '../icon';

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  icon,
  onClick = (): void => undefined,
  onKeyPress = (): void => undefined,
  size,
  variant,
  square = false,
  loading = false,
  classNames
}: ButtonProps): JSX.Element => {
  const className = clsx('btn', variant && `btn-${variant}`, size && `btn-${size}`, square && `btn-square`, classNames);

  return (
    <button type="button" className={className} onClick={onClick} onKeyPress={onKeyPress} disabled={disabled}>
      {loading && (
        <span className="icon">
          <span className="icon-loader" />
        </span>
      )}
      {icon && <Icon icon={icon} size={size} />}
      {children}
    </button>
  );
};

export default Button;
