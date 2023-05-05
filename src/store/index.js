import { configureStore } from '@reduxjs/toolkit'
import { repositoriesReducer } from './slices/repositoriesSlice'

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer
  }
})

export * from './thunks/fetchRepositories'
