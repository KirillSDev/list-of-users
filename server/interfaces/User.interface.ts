export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    status: 'active' | 'block';
    registrationDate: Date;
    lastLoginDate: Date | null;
}
