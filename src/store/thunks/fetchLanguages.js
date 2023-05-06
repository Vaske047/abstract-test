import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchLanguages = createAsyncThunk('languages/fetch', async (payload) => {
  const response = await axios.get(payload.link, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: 'Bearer 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'
    }
  })

  return response.data
})

export { fetchLanguages }
