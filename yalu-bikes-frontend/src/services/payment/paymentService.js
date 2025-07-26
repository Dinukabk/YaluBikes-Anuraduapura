import axios from '../../api/axiosConfig';

export const initiatePayment = async (paymentData) => {
  const response = await axios.post('/payments/initiate', paymentData);
  return response.data;
};

export const verifyPayment = async (paymentId) => {
  const response = await axios.get(`/payments/verify/${paymentId}`);
  return response.data;
};

export const applyPromoCode = async (code) => {
  const response = await axios.post('/payments/promo', { code });
  return response.data;
};