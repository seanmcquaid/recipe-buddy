import spoontacularApiClient from './spoontacularApiClient';

const spoontacularServices = {
  searchRecipesByIngredients: (ingredients) =>
    spoontacularApiClient.get('/recipes/findByIngredients', {
      params: { ingredients, limitLicense: true },
    }),
};

export default spoontacularServices;
