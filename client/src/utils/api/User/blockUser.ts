import $API from '@core/axios';
import { IUser } from '@interfaces/User.interface';

export const blockUser = async (id: number[]) => {
    const response = await $API.patch('/users/block', { id });
    return response;
};
