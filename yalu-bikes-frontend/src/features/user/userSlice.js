import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  status: 'idle',
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    }
  }
});

export const { setProfile, updateProfile } = userSlice.actions;
export default userSlice.reducer;