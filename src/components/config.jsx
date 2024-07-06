import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030', // Remplacez par l'URL de votre backend
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
  