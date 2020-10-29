import React, {
  useState, useMemo, useEffect, useContext,
} from 'react';
import { useRequest } from '@umijs/hooks';
import Cookies from 'js-cookie';
import { AUTH_TOKEN_KEY, USER_ID } from 'variables';
import { AuthAPI } from 'api';

const initialValues = {
  authenticated: null,
  token: null,
  user_id: null,
};

const AuthContext = React.createContext(initialValues);

function AuthProvider(props) {
  /** state */
  const [authenticated, setAuthenticated] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const userToken = Cookies.get(AUTH_TOKEN_KEY);
    setToken(userToken);
    setAuthenticated(Boolean(userToken));
  }, []);

  /** login */
  const { data: authorization, run: loginRequest } = useRequest(AuthAPI.login, {
    manual: true,
  });

  useEffect(() => {
    if (authorization) {
      Cookies.set(AUTH_TOKEN_KEY, authorization.token);
      Cookies.set(USER_ID, authorization.id);
      setToken(authorization.token);
      setAuthenticated(true);
    }
  }, [authorization]);

  const login = loginRequest;

  /** logout */
  const logout = async () => {
    Cookies.remove(USER_ID);
    Cookies.remove(AUTH_TOKEN_KEY);
    setAuthenticated(false);
  };

  /** provider */
  const value = useMemo(
    () => ({ token, authenticated }),
    [token, authenticated],
  );

  return (
    <AuthContext.Provider
      value={{ ...value, login, logout }}
      {...props}
    />
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
