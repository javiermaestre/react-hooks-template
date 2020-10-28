import { Notification } from '../../shared/models';
import { CLEAR_NOTIFICATIONS_ACTION, REMOVE_NOTIFICATION_ACTION, SET_NOTIFICATION_ACTION } from './constants';

import { SetNotificationAction, RemoveNotificationAction, ClearNotificationAction } from './interfaces';

export type NotificationActions =
  | SetNotificationAction
  | RemoveNotificationAction
  | ClearNotificationAction
  | { type: 'unknown' };

export function clearNotification(): ClearNotificationAction {
  return {
    type: CLEAR_NOTIFICATIONS_ACTION
  };
}

export function removeNotification(index: number): RemoveNotificationAction {
  return {
    type: REMOVE_NOTIFICATION_ACTION,
    payload: index
  };
}

export function setNotification(payload: Partial<Notification>): SetNotificationAction {
  return {
    type: SET_NOTIFICATION_ACTION,
    payload: {
      show: true,
      code: payload.code,
      message: payload.message,
      type: payload.type
    }
  };
}
