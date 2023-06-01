import { makeAutoObservable } from 'mobx';
import { IUser } from '@interfaces/User.interface';
import { blockUser } from '@api/User/blockUser';
import { unblockUser } from '@api/User/unblockUser';
import { deleteUser } from '@api/User/deleteUser';
import { getAllUsers } from '@api/User/getAllUsers';
import { authStore } from './AuthStore';
class UsersStore {
    selectedUsers: number[] = [];
    selectAll: boolean = false;
    status: boolean = false;
    users: IUser[] = [];
    constructor() {
        makeAutoObservable(this);
    }
    async getAllUsers() {
        const response = await getAllUsers();
        if (!response) {
            this.status = false;
        } else {
            const users = await response;
            this.users = await [...users];
            this.status = true;
        }
    }
    clearSelectedUsers() {
        this.selectedUsers = [];
        this.selectAll = false;
    }
    selectUser(id: number) {
        this.selectedUsers.push(id);
    }
    removeFromSelectedUser(id: number) {
        this.selectedUsers = this.selectedUsers.filter((userId) => id !== userId);
    }

    async blockUsers() {
        try {
            const response = await blockUser(this.selectedUsers);
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                authStore.logout();
            }
        }
        this.selectedUsers.forEach((userId) => {
            this.users.forEach((user) => {
                if (user.id === userId) {
                    user.status = 'block';
                }
            });
        });
    }
    unblockUsers() {
        unblockUser(this.selectedUsers);
        this.selectedUsers.forEach((userId) => {
            const foundUser = this.users.find((user) => user.id === userId);

            if (foundUser) {
                foundUser.status = 'active';
            }
        });
    }
    async deleteUsers() {
        try {
            const response = await deleteUser(this.selectedUsers);
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                authStore.logout();
            }
        }
        this.users = this.users.filter((user) => !this.selectedUsers.includes(user.id));
        this.selectedUsers = [];
    }
}

const users = new UsersStore();
export default users;
