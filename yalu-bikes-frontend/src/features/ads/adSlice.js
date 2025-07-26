import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ads: [],
  activeAd: null,
  status: 'idle',
  error: null
};

const adSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    adLoaded: (state, action) => {
      state.activeAd = action.payload;
    },
    adClicked: (state, action) => {
      // Track click logic
    }
  }
});

export const { adLoaded, adClicked } = adSlice.actions;
export default adSlice.reducer;