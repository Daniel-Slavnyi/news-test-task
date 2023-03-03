import { news } from './http';

export const getNews = async (numOfPage = 1) => {
  const options = {
    q: ' Apple',
    sortBy: 'popularity',
    apiKey: '514c0f41e9e7409b90b4595e08780d51',
    page: `${numOfPage}`,
    pageSize: 20,
  };

  try {
    const { data } = await news.get('', { params: options });
    console.log('response info =>', data);
    return data;
  } catch (error) {
    return error;
  }
};
