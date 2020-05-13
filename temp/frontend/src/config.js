import axios, { AxiosInstance } from 'axios';

const url = 'http://localhost:1500';

const api = axios.create({
  baseURL: url
});

export default api;