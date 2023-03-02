import axios from 'axios';

export const authUser = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
  set: token => {
    authUser.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    authUser.defaults.headers.Authorization = '';
  },
};
