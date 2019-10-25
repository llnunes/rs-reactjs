import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.2.200.23:3333', 
});

export default api;