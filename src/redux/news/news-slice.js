import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  //   extraReducers: builder => {
  //     builder.addCase();
  //   },
});

const { reducer } = newsSlice;

export default reducer;
