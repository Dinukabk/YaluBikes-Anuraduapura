import axios from '../../services/api/axiosConfig';

export const getAvailableBikes = async (params) => {
  const response = await axios.get('/bikes/available', { params });
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await axios.post('/bookings', bookingData);
  return response.data;
};

export const getBookingDetails = async (bookingId) => {
  const response = await axios.get(`/bookings/${bookingId}`);
  return response.data;
};