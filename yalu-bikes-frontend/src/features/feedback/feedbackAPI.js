import axios from '../../../services/api/axiosConfig';

export const submitReview = async (reviewData) => {
  const response = await axios.post('/reviews', reviewData);
  return response.data;
};

export const fetchReviews = async (bikeId) => {
  const response = await axios.get(`/reviews?bikeId=${bikeId}`);
  return response.data;
};

export const deleteReview = async (reviewId) => {
  const response = await axios.delete(`/reviews/${reviewId}`);
  return response.data;
};