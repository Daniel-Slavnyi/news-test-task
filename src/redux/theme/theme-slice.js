import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: true,
  },
  reducers: {
    changeTheme(state) {
      state.theme = !state.theme;
    },
  },
});

const { actions, reducer } = themeSlice;

export const { changeTheme } = actions;

export default reducer;
