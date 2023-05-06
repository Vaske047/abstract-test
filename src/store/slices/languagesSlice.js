import { createSlice } from '@reduxjs/toolkit'
import { fetchLanguages } from '../thunks/fetchLanguages'

const languagesSlice = createSlice({
  name: 'languages',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  extraReducers(builder) {
    builder.addCase(fetchLanguages.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchLanguages.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchLanguages.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

export const languagesReducer = languagesSlice.reducer
