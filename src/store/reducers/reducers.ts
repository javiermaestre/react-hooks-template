import { combineReducers } from 'redux';

import notificationReducer from './notification.reducer';
import userReducer from './user.reducer';

export const rootReducer = combineReducers({
  notification: notificationReducer,
  user: userReducer
});

export default rootReducer;
