import { CancellablePromise } from './interceptor';

interface CacheItem {
  item: any;
  expires: number;
}

const cacheMap: Map<string, CacheItem> = new Map();
const expires = 180 * 1000; // 3 minutes

/**
 * Store a value on the cacheMap, setting a expire time
 * @param key The key to store
 * @param value The value to store
 * @example `(key: 'foo', value: 'bar') //=> [ { key: 'foo', value: { item: 'bar', expires: **TIMESTAMP + 10 min** }} ]`
 */
function add(key: string, value: any) {
  cacheMap.set(key, { item: value, expires: new Date().getTime() + expires });
}

/**
 * Returns the value stored on the cacheMap
 * @param key The key to find
 */
function get(key: string) {
  return cacheMap.get(key).item;
}

/**
 * Check if the key is stored and not expired
 * @param key The key to find
 */
function contains(key: string) {
  return cacheMap.has(key) && cacheMap.get(key).expires > new Date().getTime();
}

/**
 * Manage the request to return the cached value or do the request and store the value
 * @param key The key to find/store
 * @param callbackFn The function that execute the request
 */
export function cache(key: string, callbackFn: () => CancellablePromise<any>): CancellablePromise<any> {
  // If we have the key and is not expired, return the cached value
  if (contains(key)) {
    return [Promise.resolve(get(key)), (): void => undefined];
  }

  const [request, cancel] = callbackFn();

  // Save on cache
  request.then((result: any) => {
    add(key, result);

    return request;
  });

  return [request, cancel];
}
