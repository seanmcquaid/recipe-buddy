import axios from 'axios';

const spoontacularApiClient = axios.create({
  params: { apiKey: process.env.REACT_APP_SPOONTACULAR_API_KEY },
});

export default spoontacularApiClient;
