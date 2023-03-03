import { createSlice } from '@reduxjs/toolkit';
import { news } from './news-oparation';

let initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(news.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(news.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.articles];
        state.isLoading = false;
      })
      .addCase(news.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

const { actions, reducer } = newsSlice;

export const { resetNew } = actions;

export default reducer;
