export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    status: 'active' | 'block';
    registrationDate: string | Date;
    lastLoginDate: string | Date | null;
}
