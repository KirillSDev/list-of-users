export interface IUser {
    id: string;
    email: string;
    name: string;
    dateRegistration: Date;
    lastLoginDate: Date;
    status: 'active' | 'blocked';
}
