import { LOGIN_SUCCESS, REGISTER_SUCCESS } from './actionTypes';

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const registerSuccess = (token) => ({
  type: REGISTER_SUCCESS,
  payload: { token },
});
