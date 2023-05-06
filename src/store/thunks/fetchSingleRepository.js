import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchSingleRepository = createAsyncThunk(
  'singleRepository/fetch',
  async (params) => {
    const response = await axios.get(
      `https://api.github.com/repos/${params.owner}/${params.name}`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    )

    return response.data
  }
)

export { fetchSingleRepository }
