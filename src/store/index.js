import { configureStore } from '@reduxjs/toolkit'
import { repositoriesReducer } from './slices/repositoriesSlice'
import { singleRepositoryReducer } from './slices/singleRepositorySlice'

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    singleRepository: singleRepositoryReducer
  }
})

export * from './thunks/fetchRepositories'
export * from './thunks/fetchSingleRepository'
