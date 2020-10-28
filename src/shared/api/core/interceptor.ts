import { getCookie, removeCookie } from '../../utils/cookies';
import { Exception } from '../models';

export type CancellablePromise<T> = [Promise<T>, () => void];

/**
 * Add the token to the request if exists
 * @param request The request where to add the token
 */
function addToken(request: RequestInit): void {
  const token = getCookie('_session');

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`
    };
  }
}

/**
 * Checks if the session has expired to remove the session cookie
 * @param status The status of the request
 * @param title The title of the error
 */
function checkTokenExpired(status?: number, title?: string): void {
  if (status === 401 && title === 'Unauthorized') {
    removeCookie('_session');
  }
}

/**
 * Handle the success callback of a request
 * @param response
 */
function successCallback(response: Response): Promise<any> {
  return response.json().then((result: any) => {
    // Handle business error in service
    if (response.status && response.status !== 200) {
      checkTokenExpired(result?.status, result?.title);

      const err: Exception = {
        status: response?.status,
        detail: result?.detail,
        title: result?.title
      };

      throw err;
    }
    return result;
  });
}

/**
 * Handle the error callback of a request
 * @param response
 */
function errorCallback(error: any): any {
  checkTokenExpired(error?.status, error?.title);

  throw error;
}

/**
 * Handle the request for check if user access token is valid
 * @param request
 */
export default function interceptor(input: RequestInfo, init?: RequestInit): CancellablePromise<Response> {
  addToken(init);

  // Make request cancellable
  const controller = new AbortController();
  const { signal } = controller;
  // eslint-disable-next-line
  init.signal = signal;

  // Handle promise response/error
  const promise: Promise<Response> = fetch(input, init).then(successCallback).catch(errorCallback);

  return [promise, controller.abort.bind(controller)];
}
