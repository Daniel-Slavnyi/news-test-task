import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Layout from 'pages/Layout/Layout';
import NewsPage from 'pages/NewsPage/NewsPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};
