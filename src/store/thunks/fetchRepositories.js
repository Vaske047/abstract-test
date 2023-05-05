import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchRepositories = createAsyncThunk(
  'repositories/fetch',
  async (params) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: 'Bearer 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'
        },
        params: {
          q: params.query || '',
          sort: params.sort || '',
          order: params.order || '',
          per_page: params.perPage || '',
          page: params.page || ''
        }
      }
    )

    return response.data
  }
)

export { fetchRepositories }
