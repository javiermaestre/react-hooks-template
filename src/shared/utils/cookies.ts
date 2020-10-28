import Cookies, { CookieSetOptions, Cookie, CookieGetOptions, CookieChangeListener } from 'universal-cookie';

// Documentation: https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie
let cookies: Cookies;

export function init(): void {
  cookies = new Cookies();
}

export function setCookie(name: string, value: Cookie, options?: CookieSetOptions): void {
  cookies.set(name, value, {
    path: '/',
    httpOnly: window.location.protocol === 'https',
    ...options
  });
}

export function getCookie(name: string, options?: CookieGetOptions): any {
  return cookies.get(name, options);
}

export function getCookies(): any {
  return cookies.getAll();
}

export function removeCookie(name: string, options?: CookieSetOptions): void {
  cookies.remove(name, {
    path: '/',
    httpOnly: window.location.protocol === 'https',
    ...options
  });
}

export function addCookieListener(callback: CookieChangeListener): void {
  cookies.addChangeListener(callback);
}

export function removeCookieListener(callback: CookieChangeListener): void {
  cookies.removeChangeListener(callback);
}
