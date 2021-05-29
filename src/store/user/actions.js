import usersService from '../../services/usersService';
import { loading } from '../loading/actionCreators';
import { loginSuccess, registerSuccess } from './actionCreators';
import { requestError } from '../error/actionCreators';

export const loginAction = (username, password) => (dispatch) => {
  dispatch(loading());
  return usersService
    .login(username, password)
    .then(({ data }) => {
      dispatch(loginSuccess(data.token));
      return Promise.resolve(data);
    })
    .catch((err) => {
      dispatch(requestError(err.response.data.errorMessage));
      return Promise.reject(err);
    });
};

export const registerAction = (username, password) => (dispatch) => {
  dispatch(loading());
  return usersService
    .register(username, password)
    .then(({ data }) => {
      dispatch(registerSuccess(data.token));
      return Promise.resolve(data);
    })
    .catch((err) => {
      dispatch(requestError(err.response.data.errorMessage));
      return Promise.reject(err);
    });
};
