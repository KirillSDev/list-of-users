import axios from 'axios';

const $API = axios.create({
    baseURL: process.env.API_URL || '/',
});

$API.interceptors.request.use(
    (config) => {
        config.headers.token = `${localStorage.getItem('token')}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default $API;
