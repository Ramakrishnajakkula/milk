import api from './api';

export const createOrder = async (orderData) => {
  try {
    const { data } = await api.post('/orders', orderData);
    return data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getOrders = async () => {
  try {
    const { data } = await api.get('/orders');
    return data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
