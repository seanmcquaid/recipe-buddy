import axios from 'axios';

const apiClient = axios.create({
  baseUrl: process.env.REACT_APP_API_URL,
});

export default apiClient;
