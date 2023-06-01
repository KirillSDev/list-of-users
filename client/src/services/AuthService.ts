import { loginUser } from '@api/Auth/loginUser.ts';
import { registerUser } from '@api/Auth/registerUser.ts';
import { validateToken } from '@api/Auth/validateToken.ts';
import { IFormData } from '@interfaces/FormData.interface';
import { authStore } from '@store/AuthStore';

export class AuthService {
    static async loginUser(formData: IFormData) {
        try {
            authStore.setLoading();
            const data = await loginUser(formData);
            authStore.login(data.token);
        } catch (error: any) {
            authStore.setMessage(error.response.data.error);
        }
    }
    static async registerUser(formData: IFormData) {
        try {
            authStore.setLoading();
            const data = await registerUser(formData);
            authStore.setMessage(data);
        } catch (error: any) {
            authStore.setMessage(error.response.data.error);
        }
    }
    static async validateToken() {
        try {
            if (localStorage.length) {
                const response = await validateToken();
                authStore.setStatusAuthenticated(true);
            }
        } catch (error: any) {
            authStore.setStatusAuthenticated(false);
        }
    }
}
