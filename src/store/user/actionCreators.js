import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from './actionTypes';

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginError = (errorMessage) => ({
  type: LOGIN_ERROR,
  payload: { errorMessage },
});

export const registerSuccess = (token) => ({
  type: REGISTER_SUCCESS,
  payload: { token },
});

export const registerError = (errorMessage) => ({
  type: REGISTER_ERROR,
  payload: { errorMessage },
});
