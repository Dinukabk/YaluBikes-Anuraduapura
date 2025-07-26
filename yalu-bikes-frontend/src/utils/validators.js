export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateNIC = (nic) => {
  const re = /^[0-9]{9}[vVxX]?$/;
  return re.test(nic);
};