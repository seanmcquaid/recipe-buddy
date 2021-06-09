import {
  ADD_RECIPE_SUCCESS,
  DELETE_RECIPE_SUCCESS,
  GET_RECIPES_SUCCESS,
} from './actionTypes';

const initialState = {
  recipes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE_SUCCESS:
    case DELETE_RECIPE_SUCCESS:
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload.recipes,
      };
    default:
      return state;
  }
};

export default reducer;
