import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUpUser,
  loginUser,
  refreshUser,
  logoutUser,
} from '../../services/apiAuth';
import { token } from 'services/http';

export const register = createAsyncThunk(
  'auth/register',
  async (objData, thunkAPI) => {
    try {
      const res = await signUpUser(objData);
      token.set(res.token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (objData, thunkAPI) => {
    try {
      const res = await loginUser(objData);
      token.set(res.token);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logoutUser();
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const res = await refreshUser();
    return res;
  } catch (error) {}
});
