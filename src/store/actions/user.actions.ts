import { SET_USER_ACTION } from './constants';
import { SetUser } from './interfaces';
import { UserProfile } from '../../shared/models';

export type UserActions = SetUser | { type: 'unknown' };

export function setUser(user: UserProfile): SetUser {
  return {
    type: SET_USER_ACTION,
    payload: {
      user
    }
  };
}
