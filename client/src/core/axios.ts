import axios from 'axios';

const $API = axios.create({
    baseURL: 'https://list-of-users.onrender.com:3301',
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
