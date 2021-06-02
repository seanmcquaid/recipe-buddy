import spoontacularApiClient from './spoontacularApiClient';

const spoontacularServices = {
  searchRecipesByIngredients: (ingredients) =>
    spoontacularApiClient.get('/recipes/findByIngredients', {
      params: { ingredients, limitLicense: true },
    }),
  getRecipeById: (id) =>
    spoontacularApiClient.get(`/recipes/${id}/ingredientWidget.json`),
};

export default spoontacularServices;
