import usersService from '../../services/usersService';
import { loading } from '../loading/actionCreators';
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
} from './actionCreators';

export const loginAction = (username, password) => (dispatch) => {
  dispatch(loading());
  return usersService
    .login(username, password)
    .then(({ data }) => {
      dispatch(loginSuccess(data.token));
      return Promise.resolve();
    })
    .catch((err) => {
      console.log(Object.entries(err));
      dispatch(loginError(err.data.response.errorMessage));
      return Promise.reject();
    });
};

export const registerAction = (username, password) => (dispatch) => {
  dispatch(loading());
  return usersService
    .register(username, password)
    .then(({ data }) => {
      dispatch(registerSuccess(data.token));
      return Promise.resolve();
    })
    .catch((err) => {
      console.log(Object.entries(err));
      dispatch(registerError(err.data.response.errorMessage));
      return Promise.reject();
    });
};
