import axios from '../../../services/api/axiosConfig';

export const fetchAllBookings = async () => {
  const response = await axios.get('/admin/bookings');
  return response.data;
};

export const updateBookingStatus = async (bookingId, status) => {
  const response = await axios.patch(`/admin/bookings/${bookingId}`, { status });
  return response.data;
};

export const getAdminStats = async () => {
  const response = await axios.get('/admin/stats');
  return response.data;
};