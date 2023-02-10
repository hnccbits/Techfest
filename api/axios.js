import axios from 'axios';

let token;

const axiosInstance = axios.create({
  baseURL: 'https://techmahotsav.azurewebsites.net/api',
  // baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      token = window.localStorage.getItem('JWTTOKEN');
    } else {
      token = '';
    }

    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default axiosInstance;
