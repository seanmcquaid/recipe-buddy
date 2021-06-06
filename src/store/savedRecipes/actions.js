import recipesService from '../../services/recipesService';
import { requestError } from '../error/actionCreators';
import { loading } from '../loading/actionCreators';
import { tokenSelector } from '../user/selectors';
import { addRecipeSuccess } from './actionCreators';

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
