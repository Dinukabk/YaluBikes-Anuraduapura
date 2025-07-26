import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentMethods: [],
  selectedMethod: null,
  status: 'idle',
  error: null
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.selectedMethod = action.payload;
    },
    resetPayment: (state) => {
      state.selectedMethod = null;
    }
  }
});

export const { setPaymentMethod, resetPayment } = paymentSlice.actions;
export default paymentSlice.reducer;