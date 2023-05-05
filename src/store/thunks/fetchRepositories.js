import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchRepositories = createAsyncThunk('repositories/fetch', async () => {
  const response = await axios.get(
    'https://api.github.com/search/repositories?q=react'
  )

  return response.data
})

export { fetchRepositories }
