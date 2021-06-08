import { ADD_RECIPE_SUCCESS } from './actionTypes';

export const addRecipeSuccess = (recipes) => ({
  type: ADD_RECIPE_SUCCESS,
  payload: { recipes },
});
