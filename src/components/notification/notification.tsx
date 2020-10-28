/* React imports */
import React, { useEffect } from 'react';

/* Third-party imports */
import { useDispatch, useSelector } from 'react-redux';

/* Local imports */
import { Toast, ToastVariant } from '../../shared/components';
import { removeNotification } from '../../store/actions';
import { State, Notification as NotificationI } from '../../shared/models';

const Notification: React.FC = () => {
  const notifications = useSelector((state: State) => state.notification);
  const dispatch = useDispatch();
  const handleClose = (index: number) => {
    dispatch(removeNotification(index));
  };

  useEffect(() => {
    if (notifications.length > 0) {
      setTimeout(() => {
        handleClose(0);
      }, 7000);
    }
  }, [notifications.length]);

  return (
    <div className="notification-container">
      {notifications.map((item: NotificationI, index: number) => (
        <Toast
          key={item.message}
          title="Notification"
          content={item.message}
          classNames={item.show ? 'show' : 'hide'}
          variant={item.type as ToastVariant}
          handleClose={() => handleClose(index)}
        >
          {item.message}
        </Toast>
      ))}
    </div>
  );
};

export default Notification;
