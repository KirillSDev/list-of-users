import $API from '@core/axios';
import { IFormData } from '@interfaces/FormData.interface';

export const registerUser = async (formData: IFormData) => {
    const response = await $API.post('/register', formData);
    return response.data;
};
