import axios, { AxiosError } from 'axios';

import { useBoundStore } from './store/store';
import { ProblemDetails } from './types';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const axiosError = error as AxiosError<ProblemDetails>;
    if (axiosError.response) {
      return Promise.reject(axiosError.response.data);
    }
    return Promise.reject(error);
  }
);

apiClient.interceptors.request.use(
  (config) => {
    const token = useBoundStore.getState().jwtToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
