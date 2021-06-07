import recipesService from '../../../services/recipesService';
import configureMockStore from '../../../testUtils/configureMockStore';
import mockServiceSuccess from '../../../testUtils/mockServiceSuccess';
import { LOADING } from '../../loading/actionTypes';
import { addRecipeAction } from '../actions';
import { ADD_RECIPE_SUCCESS } from '../actionTypes';

describe('savedRecipes - actions', () => {
  it('addRecipeAction', () => {
    const initialState = {
      user: {
        token: 'token',
      },
      savedRecipes: {
        recipes: [],
      },
    };
    const store = configureMockStore(initialState);
    mockServiceSuccess(recipesService, 'addRecipe', {
      data: { recipes: [{ id: 1, title: 'Parmesan' }] },
    });

    return store.dispatch(addRecipeAction(1, 'Parmesan')).then(() => {
      const actions = store.getActions();
      const result = [
        { type: LOADING },
        {
          type: ADD_RECIPE_SUCCESS,
          payload: { recipes: [{ id: 1, title: 'Parmesan' }] },
        },
      ];
      expect(actions).toEqual(result);
    });
  });
});
