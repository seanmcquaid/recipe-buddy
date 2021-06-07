import spoontacularApiClient from './spoontacularApiClient';

const spoontacularServices = {
  searchRecipesByIngredients: (ingredients) =>
    spoontacularApiClient.get(
      'https://api.spoonacular.com/recipes/findByIngredients',
      {
        params: { ingredients: ingredients.join(), limitLicense: true },
      },
    ),
  getRecipeById: (id) =>
    spoontacularApiClient.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
    ),
};

export default spoontacularServices;
