import { recipesSelector, savedRecipesSelector } from '../selectors';

describe('savedRecipes - selectors', () => {
  it('savedRecipesSelector', () => {
    const state = {
      savedRecipes: {
        recipes: [],
      },
    };
    expect(savedRecipesSelector(state)).toEqual({ recipes: [] });
  });

  it('recipesSelector', () => {
    const state = {
      savedRecipes: {
        recipes: [],
      },
    };
    expect(recipesSelector(state)).toEqual([]);
  });
});
