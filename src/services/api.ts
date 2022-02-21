import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.opensea.io/api/v1', // process.env.REACT_APP_API_HOST
});

export default instance;
