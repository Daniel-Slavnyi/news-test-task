import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/auth-oparation';
import PrivateRouter from './PrivateRoute/PrivateRouter';
import PublickRouter from './PublickRouter/PublickRouter';
import HomePage from 'pages/HomePage/HomePage';
import Layout from 'pages/Layout/Layout';
import NewsPage from 'pages/NewsPage/NewsPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'style/theme';
import { news } from 'redux/news/news-oparation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
    dispatch(news());
  }, [dispatch]);

  console.log('im APP');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="auth" element={<PublickRouter />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="profile" element={<PrivateRouter />}>
            <Route index element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
