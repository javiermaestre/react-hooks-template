import { Notification } from '../../shared/models';
import { NotificationActions } from '../actions';
import { SET_NOTIFICATION_ACTION, REMOVE_NOTIFICATION_ACTION, CLEAR_NOTIFICATIONS_ACTION } from '../actions/constants';

const initialState: Notification[] = [
  /* {
    code: '001',
    message: 'This is an example notification',
    show: true,
    type: 'danger'
  },
  {
    code: '001',
    message: 'This is an example notification',
    show: true,
    type: 'danger'
  } */
];

export default function notificationReducer(
  state: Notification[] = initialState,
  action: NotificationActions
): Notification[] {
  switch (action.type) {
    case SET_NOTIFICATION_ACTION:
      return [...state, { ...action.payload }];
    case REMOVE_NOTIFICATION_ACTION:
      return [...state.filter((item: Notification) => item !== state[action.payload])];
    case CLEAR_NOTIFICATIONS_ACTION:
      return [];

    default:
      return state;
  }
}
