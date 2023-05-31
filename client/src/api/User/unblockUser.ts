import $API from '@core/axios';
import { IUser } from '@interfaces/User.interface';

export const unblockUser = async (id: number[]) => {
    const response = await $API.patch('/users/unblock', { id });
};
