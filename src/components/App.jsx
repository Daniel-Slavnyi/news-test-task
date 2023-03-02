import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Layout from 'pages/Layout/Layout';
import NewsPage from 'pages/NewsPage/NewsPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
