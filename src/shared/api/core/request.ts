import interceptor, { CancellablePromise } from './interceptor';

const defaultConfig: RequestInit = {
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * Builds the URL, joining URI with the API_URL
 * @param uri The uri to concat to URL
 */
function resolveUrl(uri: string): string {
  return `${process.env.API_URL}/${uri}`;
}

/**
 * Wraps the fetch requests with a interceptor
 * @param input
 * @param init
 */
export function request(input: RequestInfo, init?: RequestInit): CancellablePromise<Response> {
  return interceptor(input, init);
}

/**
 * Makes a GET request
 * @param url The URL to make the GET request
 */
export function get(url: string, config?: RequestInit): CancellablePromise<any> {
  return request(resolveUrl(url), { ...defaultConfig, ...config, method: 'GET' });
}

/**
 * Makes a POST request
 * @param url The URL to make the POST request
 * @param data The data to sent with the POST request
 *
 */
export function post(url: string, data?: BodyInit, config?: RequestInit): CancellablePromise<any> {
  return request(resolveUrl(url), { ...defaultConfig, ...config, method: 'POST', body: data });
}

/**
 * Makes a DELETE request
 * @param url The URL to make the DELETE request
 */
export function deleteRequest(url: string, config?: RequestInit): CancellablePromise<any> {
  return request(resolveUrl(url), { ...defaultConfig, ...config, method: 'DELETE' });
}

/**
 * Makes a PUT request
 * @param url The URL to make the PUT request
 * @param data The data to sent with the PUT request
 */
export function put(url: string, data?: BodyInit, config?: RequestInit): CancellablePromise<any> {
  return request(resolveUrl(url), { ...defaultConfig, ...config, method: 'PUT', body: data });
}

/**
 * Makes a Patch request
 * @param url The URL to make the PATCH request
 * @param data The data to sent with the PATCH request
 */
export function patch(url: string, data?: BodyInit, config?: RequestInit): CancellablePromise<any> {
  return request(resolveUrl(url), { ...defaultConfig, ...config, method: 'PATCH', body: data });
}
