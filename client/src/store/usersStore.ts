import { makeAutoObservable } from 'mobx';
import { IUser } from '@interfaces/User.interface';

class UsersStore {
    selectedUsers: string[] = [];
    selectAll: boolean = false;
    users: IUser[] = [
        {
            id: '1',
            name: 'Name',
            email: 'Name@gmail.com',
            dateRegistration: new Date(),
            lastLoginDate: new Date(),
            status: 'active',
        },
        {
            id: '2',
            name: 'Name',
            email: 'Name@gmail.com',
            dateRegistration: new Date(),
            lastLoginDate: new Date(),
            status: 'active',
        },
        {
            id: '3',
            name: 'Naewme',
            email: 'Namwewe@gmail.com',
            dateRegistration: new Date(),
            lastLoginDate: new Date(),
            status: 'active',
        },
        {
            id: '4',
            name: 'Namwewe',
            email: 'Name@gmail.com',
            dateRegistration: new Date(),
            lastLoginDate: new Date(),
            status: 'active',
        },
        {
            id: '5',
            name: 'Name',
            email: 'Nadwdwme@gmail.com',
            dateRegistration: new Date(),
            lastLoginDate: new Date(),
            status: 'active',
        },
    ];
    constructor() {
        makeAutoObservable(this);
    }
    clearSelectedUsers() {
        this.selectedUsers = [];
        this.selectAll = false;
    }
    selectUser(id: string) {
        this.selectedUsers.push(id);
    }
    removeFromSelectedUser(id: string) {
        this.selectedUsers = this.selectedUsers.filter((userId) => id !== userId);
    }

    blockUsers() {
        this.selectedUsers.forEach((userId) => {
            const foundUser = this.users.find((user) => user.id === userId);
            foundUser && (foundUser.status = 'blocked');
        });
    }
    unblockUsers() {
        this.selectedUsers.forEach((userId) => {
            const foundUser = this.users.find((user) => user.id === userId);
            foundUser && (foundUser.status = 'active');
        });
    }
    deleteUsers() {
        this.users = this.users.filter((user) => !this.selectedUsers.includes(user.id));
        this.selectedUsers = [];
    }
}

const users = new UsersStore();
export default users;
