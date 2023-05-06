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
