import { picture } from './http';

export const getPicture = async (value, numOfPage = 1) => {
  const options = {
    q: `${value}`,
    key: '31554206-44eb8eb4918d364b6fc8ad198',
    image_type: 'photo',
    orientation: 'horizontal',
    page: `${numOfPage}`,
    per_page: '14',
  };

  try {
    const { data } = await picture.get('', { params: options });
    return data;
  } catch (error) {
    return error;
  }
};
