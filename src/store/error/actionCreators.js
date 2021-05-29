import { LOGIN_ERROR, REGISTER_ERROR } from './actionTypes';

export const loginError = (errorMessage) => ({
  type: LOGIN_ERROR,
  payload: { errorMessage },
});

export const registerError = (errorMessage) => ({
  type: REGISTER_ERROR,
  payload: { errorMessage },
});
