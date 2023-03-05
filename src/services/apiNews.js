import { news } from './http';

export const getNews = async (numOfPage = 1) => {
  const options = {
    page: `${numOfPage}`,
    _limit: '10',
  };

  try {
    const { data } = await news.get('/posts', { params: options });
    return data;
  } catch (error) {
    return error;
  }
};
