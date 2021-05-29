import { LOGIN_SUCCESS, REGISTER_SUCCESS } from './actionTypes';

const initialState = {
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
