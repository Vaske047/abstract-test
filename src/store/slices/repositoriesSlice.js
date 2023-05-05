import { createSlice } from '@reduxjs/toolkit'
import { fetchRepositories } from '../thunks/fetchRepositories'

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },
  extraReducers(builder) {
    builder.addCase(fetchRepositories.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  }
})

export const repositoriesReducer = repositoriesSlice.reducer
