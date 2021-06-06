import { createSelector } from 'reselect';

export const savedRecipesSelector = (state) => state.savedRecipes;

export const recipesSelector = createSelector(
  savedRecipesSelector,
  (savedRecipes) => savedRecipes.recipes,
);
