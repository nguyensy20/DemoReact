// src/services/authService.js
import axios from 'axios';

const API_URL = 'https://api-xuongmay-dev.amazingtech.vn/api/auth/login';

const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  return response.data.data.tokenResponse.accessToken;
};

export { login };
