import * as axios from 'axios';
import Cookies from 'js-cookie';
import { AUTH_TOKEN_KEY } from 'variables';

const { REACT_APP_API_URL } = process.env;

const defaultConfig = {
  baseURL: REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
};

export const instance = axios.create(defaultConfig);
export const authenticatedInstance = axios.create(defaultConfig);

export default {
  /**
   * Makes an unauthenticated request
   * @returns {import('axios').AxiosInstance}
   */
  unauthorized() {
    return instance;
  },

  /**
   * Makes a authenticated request
   * @returns {import('axios').AxiosInstance}
   */
  authorized() {
    authenticatedInstance.defaults.headers.common.Authorization = (
      `Bearer ${Cookies.get(AUTH_TOKEN_KEY)}`
    );
    authenticatedInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          Cookies.remove(AUTH_TOKEN_KEY);
          window.location.href = '/signin';
          return null;
        }

        throw error;
      },
    );

    return authenticatedInstance;
  },
};
