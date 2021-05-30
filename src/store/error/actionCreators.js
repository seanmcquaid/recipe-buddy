import { REQUEST_ERROR } from './actionTypes';

export const requestError = (errorMessage) => ({
  type: REQUEST_ERROR,
  payload: { errorMessage },
});
