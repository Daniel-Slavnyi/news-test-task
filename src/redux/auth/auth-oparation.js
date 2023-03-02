import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpUser, loginUser } from '../../services/apiAuth';
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
