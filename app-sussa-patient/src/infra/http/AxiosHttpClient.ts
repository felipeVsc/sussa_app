import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosHttpClient = axios.create({
    baseURL: 'http://192.168.10.18:8000'
});


axiosHttpClient.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('@security_token');
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
  
