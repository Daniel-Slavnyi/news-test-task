import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  user: { username: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  //   extraReducers: builder => {
  //     builder.addCase();
  //   },
});

const { reducer } = authSlice;

export default reducer;
