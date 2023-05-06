import { createSlice } from '@reduxjs/toolkit'
import { fetchSingleRepository } from '../thunks/fetchSingleRepository'

const singleRepositorySlice = createSlice({
  name: 'singleRepository',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  extraReducers(builder) {
    builder.addCase(fetchSingleRepository.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchSingleRepository.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchSingleRepository.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

export const singleRepositoryReducer = singleRepositorySlice.reducer
