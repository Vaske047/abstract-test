import { createSlice } from '@reduxjs/toolkit'
import { fetchContributors } from '../thunks/fetchContributors'

const contributorsSlice = createSlice({
  name: 'contributors',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  extraReducers(builder) {
    builder.addCase(fetchContributors.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchContributors.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchContributors.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

export const contributorsReducer = contributorsSlice.reducer
