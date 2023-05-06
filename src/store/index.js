import { configureStore } from '@reduxjs/toolkit'
import { repositoriesReducer } from './slices/repositoriesSlice'
import { singleRepositoryReducer } from './slices/singleRepositorySlice'
import { contributorsReducer } from './slices/contributorsSlice'
import { languagesReducer } from './slices/languagesSlice'

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    singleRepository: singleRepositoryReducer,
    contributors: contributorsReducer,
    languages: languagesReducer
  }
})

export * from './thunks/fetchRepositories'
export * from './thunks/fetchSingleRepository'
export * from './thunks/fetchLanguages'
export * from './thunks/fetchContributors'
