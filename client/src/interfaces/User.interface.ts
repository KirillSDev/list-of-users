export interface IUser {
    id: number;
    email: string;
    name: string;
    registrationDate: string;
    lastLoginDate: string | null;
    status: 'active' | 'block';
}
