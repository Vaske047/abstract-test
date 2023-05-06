import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchSingleRepository = createAsyncThunk(
  'singleRepository/fetch',
  async (params) => {
    const response = await axios.get(
      `https://api.github.com/repos/${params.owner}/${params.name}`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: 'Bearer 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'
        }
      }
    )

    return response.data
  }
)

export { fetchSingleRepository }
