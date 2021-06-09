import recipesService from '../../services/recipesService';
import { requestError } from '../error/actionCreators';
import { loading } from '../loading/actionCreators';
import { tokenSelector } from '../user/selectors';
import {
  addRecipeSuccess,
  deleteRecipeSuccess,
  getRecipesSuccess,
} from './actionCreators';

export const addRecipeAction = (id, title) => (dispatch, getState) => {
  dispatch(loading());
  const token = tokenSelector(getState());
  return recipesService
    .addRecipe(id, title, token)
    .then(({ data }) => {
      dispatch(addRecipeSuccess(data.recipes));
      return Promise.resolve(data);
    })
    .catch((err) => {
      dispatch(requestError(err.response.data.errorMessage));
      return Promise.reject(err);
    });
};

export const deleteRecipeAction = (id) => (dispatch, getState) => {
  dispatch(loading());
  const token = tokenSelector(getState());
  return recipesService
    .deleteRecipeById(id, token)
    .then(({ data }) => {
      dispatch(deleteRecipeSuccess(data.recipes));
      return Promise.resolve(data);
    })
    .catch((err) => {
      dispatch(requestError(err.response.data.errorMessage));
      return Promise.reject(err);
    });
};

export const getRecipesAction = () => (dispatch, getState) => {
  dispatch(loading());
  const token = tokenSelector(getState());
  return recipesService
    .getRecipes(token)
    .then(({ data }) => {
      dispatch(getRecipesSuccess(data.recipes));
      return Promise.resolve(data);
    })
    .catch((err) => {
      dispatch(requestError(err.response.data.errorMessage));
      return Promise.reject(err);
    });
};
