import { SET_USER_ACTION } from '../actions/constants';
import { UserState } from '../../shared/models';
import { UserActions } from '../actions';

export default function userReducer(
  state: UserState = {
    user: undefined
  },
  action: UserActions
): UserState {
  switch (action.type) {
    case SET_USER_ACTION: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }

    default:
      return state;
  }
}
