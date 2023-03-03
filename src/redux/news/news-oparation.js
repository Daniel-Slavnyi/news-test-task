import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from 'services/apiNews';

export const news = createAsyncThunk('news/get', async (numPage, thunkAPI) => {
  try {
    const res = await getNews(numPage);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
