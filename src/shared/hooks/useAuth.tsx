/* React imports */
import { useState, useEffect } from 'react';

/* Local imports */
import { addCookieListener, getCookie, removeCookieListener } from '../utils/cookies';

interface UseAuthResult {
  token: string;
}

export default function useAuth(): UseAuthResult {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    /**
     * Listen all the cookie changes to check if the session cookie has changed
     * @param name The name of the cookie changed
     * @param value The current value
     */
    function checkCookie(name: string, value: any) {
      if (name === '_session' && value !== token) {
        setToken(value);
      }
    }

    addCookieListener(({ name, value }) => checkCookie(name, value));
    setToken(getCookie('_session'));

    return () => {
      removeCookieListener(() => undefined);
    };
  }, [token]);

  // Return the user token
  return { token };
}
