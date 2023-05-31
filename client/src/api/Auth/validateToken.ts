import $API from '@core/axios';

export const validateToken = async () => {
    const response = await $API.get('/');
    return response;
};
