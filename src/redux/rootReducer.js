import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import newsReducer from './news/news-slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
});
