import axios from 'axios';

const api = axios.create({
  timeout: 60000,
  baseURL: ``,
});

export default api;
