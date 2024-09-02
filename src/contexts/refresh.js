// import axiosInstance from '../api/axios'; // Adjust the import path if needed

// export const refreshToken = async () => {
//   try {
//     const response = await axiosInstance.post('/auth/refresh');
//     return response.data; // This should include the new token or session data
//   } catch (error) {
//     console.error('Failed to refresh token:', error);
//     throw error; // Rethrow or handle the error as needed
//   }
// };

// import React, { useEffect } from 'react';
// import { refreshToken } from './api/auth'; // Adjust the import path if needed

// const App = () => {
//   useEffect(() => {
//     const handleTokenRefresh = async () => {
//       try {
//         const data = await refreshToken();
//         // Handle the new token or session data
//         console.log('Token refreshed:', data);
//         // Store the new token in localStorage or context
//         localStorage.setItem('token', data.token);
//       } catch (error) {
//         console.error('Error refreshing token:', error);
//         // Handle the error (e.g., redirect to login)
//       }
//     };

//     // Example: Refresh token on component mount or conditionally
//     handleTokenRefresh();
//   }, []);

//   return <div>{/* Your app content */}</div>;
// };

// export default App;

// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3001/api', // Adjust base URL as needed
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor to add token to headers
// axiosInstance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// }, error => Promise.reject(error));

// // Response interceptor to handle token expiration and refresh
// axiosInstance.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const data = await refreshToken();
//         localStorage.setItem('token', data.token);
//         axiosInstance.defaults.headers['Authorization'] = `Bearer ${data.token}`;
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         console.error('Failed to refresh token:', refreshError);
//         // Handle token refresh failure (e.g., redirect to login)
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
