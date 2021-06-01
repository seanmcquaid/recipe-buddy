import axios from 'axios';

const spoontacularApiClient = axios.create({
  baseUrl: 'https://api.spoonacular.com',
  params: { apiKey: process.env.REACT_APP_SPOONTACULAR_API_KEY },
});

export default spoontacularApiClient;
