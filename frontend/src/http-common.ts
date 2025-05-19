import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
});

http.interceptors.request.use(
  (request) => {
    console.log('[HTTP REQUEST]', request);
    return request;
  },
  (error) => {
    console.error('[HTTP REQUEST ERROR]', error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    console.log('[HTTP RESPONSE]', response);
    return response;
  },
  (error) => {
    console.error('[HTTP RESPONSE ERROR]', error);
    return Promise.reject(error);
  }
);

export default http;
