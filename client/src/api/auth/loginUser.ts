import $API from '@core/axios';
import { IFormData } from '@interfaces/FormData.interface';
import { authStore } from '@store/AuthStore';

export const loginUser = async (formData: IFormData) => {
    const response = await $API.post('/login', formData);
    return response.data;
};
