import { makeAutoObservable } from 'mobx';
class AuthStore {
    message = '';
    isAuthenticated = false;
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }
    setMessage(message: string) {
        this.message = message;
        this.loading = false;
    }
    setLoading() {
        this.loading = true;
    }
    setStatusAuthenticated(status: boolean) {
        this.isAuthenticated = status;
    }
    login(token: string) {
        localStorage.setItem('token', token);
        this.loading = false;
        this.isAuthenticated = true;
    }
    logout() {
        localStorage.removeItem('token');
        this.isAuthenticated = false;
    }
    clearMessage() {
        this.message = '';
    }
}

export const authStore = new AuthStore();
