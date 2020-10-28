/* Local imports */
import { post } from '../core/request';
import { AuthToken } from '../models';
import { CancellablePromise } from '../core/interceptor';

export function login(username: string, password: string): CancellablePromise<AuthToken> {
  const options: RequestInit = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

  return post(
    'oauth/token',
    new URLSearchParams({
      username,
      password,
      grant_type: 'password',
      client_id: process.env.AUTH_CLIENT_ID
    }),
    options
  );
}

export function logout(token: string): CancellablePromise<AuthToken> {
  const options: RequestInit = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

  return post(
    'oauth/revoke',
    new URLSearchParams({
      token,
      token_type_hint: 'access_token'
    }),
    options
  );
}
