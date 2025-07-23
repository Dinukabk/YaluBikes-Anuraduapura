import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reviews: [],
  status: 'idle',
  error: null
}

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    // Add reducers here
  }
})

export default feedbackSlice.reducer