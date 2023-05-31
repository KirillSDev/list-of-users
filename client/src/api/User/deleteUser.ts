import $API from '@core/axios';
import { IUser } from '@interfaces/User.interface';

export const deleteUser = async (id: number[]) => {
    const response = await $API.delete('/users', {
        data: {
            id: id,
        },
    });
    return response;
};
