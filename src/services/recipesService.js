import apiClient from './apiClient';

const recipesService = {
  addRecipe: (id, title, token) =>
    apiClient.post(
      `${process.env.REACT_APP_API_URL}/recipes`,
      { id, title },
      { headers: { Authorization: token } },
    ),
};

export default recipesService;
