import {
  ADD_RECIPE_SUCCESS,
  DELETE_RECIPE_SUCCESS,
  GET_RECIPES_SUCCESS,
} from '../actionTypes';
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

  it('DELETE_RECIPE_SUCCESS', () => {
    const state = {
      recipes: [],
    };
    const result = reducer(state, {
      type: DELETE_RECIPE_SUCCESS,
      payload: { recipes: [{ id: 1, title: 'Parmesan' }] },
    });

    expect(result).toEqual({
      recipes: [{ id: 1, title: 'Parmesan' }],
    });
  });

  it('GET_RECIPES_SUCCESS', () => {
    const state = {
      recipes: [],
    };
    const result = reducer(state, {
      type: GET_RECIPES_SUCCESS,
      payload: { recipes: [{ id: 1, title: 'Parmesan' }] },
    });

    expect(result).toEqual({
      recipes: [{ id: 1, title: 'Parmesan' }],
    });
  });
});
