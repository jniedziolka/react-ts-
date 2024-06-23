import Axios from 'axios';
import { APP_URL } from '../utils/constants';

export const axios = Axios.create({
  baseURL: APP_URL,
  withCredentials: true,
  withXSRFToken: true,
});

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 419) {
      window.location.href = '/login';
    }

    throw error;
  }
);
