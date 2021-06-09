import {
  ADD_RECIPE_SUCCESS,
  DELETE_RECIPE_SUCCESS,
  GET_RECIPES_SUCCESS,
} from './actionTypes';

export const addRecipeSuccess = (recipes) => ({
  type: ADD_RECIPE_SUCCESS,
  payload: { recipes },
});

export const deleteRecipeSuccess = (recipes) => ({
  type: DELETE_RECIPE_SUCCESS,
  payload: { recipes },
});

export const getRecipesSuccess = (recipes) => ({
  type: GET_RECIPES_SUCCESS,
  payload: { recipes },
});
