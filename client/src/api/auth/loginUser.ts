import axios from '@core/axios';
import { IFormData } from '@interfaces/FormData.interface';

export const loginUser = async (formData: IFormData) => {
    try {
        const response = await axios.post('/login', formData);
    } catch (error) {
        throw new Error('User login error');
    }
};
