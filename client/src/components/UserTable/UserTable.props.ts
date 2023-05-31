import { IUser } from '@interfaces/User.interface';
import { UserTable } from './UserTable';
import { ChangeEvent } from 'react';

export interface IUserTable {
    users: IUser[];
    onCheckboxClick: (event: ChangeEvent<HTMLInputElement>, user: IUser) => void;
    clearSelectedUsers: () => void;
    selectedUsers: number[];
    selectAll: (event: ChangeEvent<HTMLInputElement>) => void;
}
