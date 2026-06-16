import axios from 'axios';

const API = axios.create({
  // Colocá acá la URL base de tu backend en Render
  baseURL: 'https://utn-backend-mvc-mongodb.onrender.com/api', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Este interceptor nos va a servir después para mandar el token de seguridad (JWT) automáticamente
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;