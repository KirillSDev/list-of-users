import axios from '@core/axios';
import { IFormData } from '@interfaces/FormData.interface';

export const registerUser = async (formData: IFormData) => {
    try {
        const response = await axios.post('/register', formData);
        return response.data;
    } catch (error) {
        throw new Error('Registration error');
    }
};
