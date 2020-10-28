/* React imports */
import React from 'react';

/* Third-party imports */
import clsx from 'clsx';

/* Local imports */
import { ToastProps, ToastVariant } from './types';

const Toast: React.FC<ToastProps> = ({
  classNames,
  title,
  time,
  content,
  handleClose,
  variant = ToastVariant.Primary
}: ToastProps): JSX.Element => {
  return (
    <div className={clsx('toast', classNames)} role="alert" aria-live="assertive" aria-atomic="true">
      <div className={clsx('toast-header', variant && `text-${variant}`)}>
        <strong className="mr-auto">{title}</strong>
        {time && <small className="text-muted">{time}</small>}
        {handleClose && (
          <button
            type="button"
            className="btn ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
            onClick={handleClose}
            onKeyPress={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>
      <div className="toast-body">{content}</div>
    </div>
  );
};

export default Toast;
