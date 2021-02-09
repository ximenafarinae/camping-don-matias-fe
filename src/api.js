import axios from 'axios';

const API = axios.create({
    baseURL: 'https://camping-don-matias-api.herokuapp.com/',
})
export default API;