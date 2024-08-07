// src/services/productService.js
import axios from 'axios';

const API_URL = 'https://api-xuongmay-dev.amazingtech.vn/api/products';

const getProducts = async (token) => {
  const response = await axios.get(`${API_URL}?index=1&pageSize=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.items;
};

export { getProducts };
