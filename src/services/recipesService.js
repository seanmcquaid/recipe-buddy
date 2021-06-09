import apiClient from './apiClient';

const recipesService = {
  addRecipe: (id, title, token) =>
    apiClient.post(
      `${process.env.REACT_APP_API_URL}/recipes`,
      { id, title },
      { headers: { Authorization: token } },
    ),
  getRecipes: (token) =>
    apiClient.get(`${process.env.REACT_APP_API_URL}/recipes`, {
      headers: { Authorization: token },
    }),
  deleteRecipeById: (id, token) =>
    apiClient.delete(`${process.env.REACT_APP_API_URL}/recipes/${id}`, {
      headers: { Authorization: token },
    }),
};

export default recipesService;
