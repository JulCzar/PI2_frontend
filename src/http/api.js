import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT_REQUEST ?? 5000,
});
