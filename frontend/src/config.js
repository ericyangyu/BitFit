import axios, { AxiosInstance } from 'axios';

const url = 'http://10.0.2.2:5000';

const api = axios.create({
  baseURL: url
});

export default api;