/* Local imports */
import { get } from '../core/request';
import { CancellablePromise } from '../core/interceptor';

export function getUserData(): CancellablePromise<any> {
  return get('user/me');
}
