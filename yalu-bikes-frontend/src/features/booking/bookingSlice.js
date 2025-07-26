import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
  availableBikes: [],
  currentBooking: null,
  status: 'idle',
  error: null
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    setAvailableBikes: (state, action) => {
      state.availableBikes = action.payload;
    },
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    }
  }
});

export const { 
  setBookings, 
  setAvailableBikes,
  setCurrentBooking,
  addBooking
} = bookingSlice.actions;
export default bookingSlice.reducer;