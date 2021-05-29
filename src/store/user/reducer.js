import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from './actionTypes';

const initialState = {
  token: null,
  errorMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
