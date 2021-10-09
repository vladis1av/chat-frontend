import axios from 'axios';

export const API_URL = `http://localhost:6000`;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token');
    if (token && config.headers) {
      config.headers['token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export { api };
