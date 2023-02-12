import axios from 'axios';

let token;

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://techmahotsav.azurewebsites.net/api',
  // baseURL: 'http://localhost:5000/api',
  // baseURL: 'http://192.168.0.113:5003/api',
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
