import { ADD_RECIPE_SUCCESS } from '../actionTypes';
import reducer from '../reducer';

describe('savedRecipes - reducer', () => {
  it('ADD_RECIPE_SUCCESS', () => {
    const state = {
      recipes: [],
    };
    const result = reducer(state, {
      type: ADD_RECIPE_SUCCESS,
      payload: { recipes: [{ id: 1, title: 'Parmesan' }] },
    });

    expect(result).toEqual({
      recipes: [{ id: 1, title: 'Parmesan' }],
    });
  });
});
