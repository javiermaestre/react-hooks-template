import { Notification, UserProfile } from '../../shared/models';
import {
  SET_NOTIFICATION_ACTION,
  REMOVE_NOTIFICATION_ACTION,
  CLEAR_NOTIFICATIONS_ACTION,
  SET_USER_ACTION
} from './constants';

// Notification interfaces
export interface SetNotificationAction {
  type: typeof SET_NOTIFICATION_ACTION;
  payload: Notification;
}

export interface RemoveNotificationAction {
  type: typeof REMOVE_NOTIFICATION_ACTION;
  payload: number;
}

export interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATIONS_ACTION;
}

// User interfaces
export interface SetUser {
  type: typeof SET_USER_ACTION;
  payload: {
    user: UserProfile;
  };
}
