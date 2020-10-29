import request from './request';

/**
 * Authenticate an user
 * @param {ICredentials} userCredentials
 */
export const login = async ({ email, password }) => (
  request.unauthorized().post('/auth/login', {
    email, password,
  })
);

/**
 * Logout an user
 */
export const logout = async () => {
  /** not-implemented */
};

export const sendRedifineEmail = async ({ email }) => (
  request.unauthorized().post('/password/send-email', {
    email,
  })
);

export const sendNewPassword = async ({ token, password }) => (
  request.unauthorized().post('/password/redefine', {
    token,
    password,
  })
);

/**
 * @typedef {Object} ICredentials
 * @property {String} email User's email
 * @property {String} password User's password
 */
