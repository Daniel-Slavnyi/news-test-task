import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPicture } from 'services/pictureApi';

export const picture = createAsyncThunk(
  'picture/get',
  async (objData, thunkAPI) => {
    try {
      const res = await getPicture(objData.value, objData.num);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
