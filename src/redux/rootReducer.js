import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import newsReducer from './news/news-slice';
import themeReducer from './theme/theme-slice';
import pictureReducer from './picture/picture-slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  theme: themeReducer,
  picture: pictureReducer,
});
