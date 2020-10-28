export interface UserProfile {
  foo: string;
}

export interface Notification {
  show: boolean;
  code: string;
  message: string;
  type: 'success' | 'warning' | 'danger';
}

export interface UserState {
  user: UserProfile;
}

export interface State {
  notification: Notification[];
  user: UserState;
}
