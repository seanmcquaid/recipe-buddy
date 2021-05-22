import apiClient from './apiClient';

const usersService = {
  login: (username, password) =>
    apiClient.post('/users/login', { username, password }),
  register: (username, password) =>
    apiClient.post('/users/register', { username, password }),
};

export default usersService;
