import api from './api';

export const getProducts = async () => {
  try {
    const { data } = await api.get('/products');
    return data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await api.get(`/products/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
