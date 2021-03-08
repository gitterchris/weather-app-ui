import axios from 'axios';

const http = axios.create({
  baseURL: apiURL,
  timeout: 3000,
});

export default http;
