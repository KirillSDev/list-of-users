import $API from '@core/axios';
import axios from '@core/axios';

export const getAllUsers = async () => {
    const token = localStorage.getItem('token');
    if (token) {
        $API.defaults.headers.token = token;
        const response = await $API.get('/users');
        return response.data;
    } else {
        return false;
    }
};
