// Create an API instance for calling the backend
import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL;
const auth = localStorage.getItem('x-auth');

export default axios.create({
  baseURL,
  timeout: 3000,
  headers: { 'x-auth': auth }
});
