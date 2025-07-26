import axios from '../../../services/api/axiosConfig';

export const fetchUserProfile = async () => {
  const response = await axios.get('/users/me');
  return response.data;
};

export const updateUserProfile = async (profileData) => {
  const response = await axios.put('/users/me', profileData);
  return response.data;
};

export const changePassword = async (passwordData) => {
  const response = await axios.put('/users/change-password', passwordData);
  return response.data;
};