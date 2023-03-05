import { createSlice } from '@reduxjs/toolkit';
import { picture } from './picture-oparation';

const pictureSlice = createSlice({
  name: 'news',
  initialState: { pictures: [] },
  extraReducers: builder => {
    builder.addCase(picture.fulfilled, (state, action) => {
      state.pictures = action.payload.hits;
    });
  },
});

const { reducer } = pictureSlice;

export default reducer;
