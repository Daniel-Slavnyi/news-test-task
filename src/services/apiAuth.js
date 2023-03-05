import { authUser } from './http';

export const signUpUser = async body => {
  try {
    const { data } = await authUser.post('/users/signup', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async body => {
  try {
    const { data } = await authUser.post('/users/login', body);

    return data;
  } catch (error) {
    return error;
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await authUser.post('/users/logout');
    return data;
  } catch (error) {
    return error;
  }
};

export const refreshUser = async () => {
  try {
    const { data } = await authUser.get('/users/current');
    return data;
  } catch (error) {
    return error;
  }
};
