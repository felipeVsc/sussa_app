import axios from 'axios';

const axiosHttpClient = axios.create({
    baseURL: 'http://134.209.119.236:8000/'
});

axiosHttpClient.interceptors.request.use(
    async config => {
      const token = await localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Token ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

export default axiosHttpClient;