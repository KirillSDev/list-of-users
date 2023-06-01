import { ChangeEvent, FC, useEffect } from 'react';
import { Layout } from '../layout/Layout';
import { UserTable } from '@components/UserTable/UserTable';
import { Button } from '@components/Button/Button';
import { Stack } from 'react-bootstrap';
import { IUser } from '@interfaces/User.interface';
import { observer } from 'mobx-react';
import users from '@store/usersStore';
import DeleteIcon from '@assets/icons/delete.svg';
import UnblockIcon from '@assets/icons/unblock.svg';
import { useNavigate } from 'react-router-dom';

export const UsersPage: FC = observer((): JSX.Element => {
    const navigate = useNavigate();
    const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>, user: IUser) => {
        if (e.target.checked) {
            users.selectUser(user.id);
        } else {
            users.removeFromSelectedUser(user.id);
        }
    };
    const selectAll = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            users.users.forEach((user) => {
                if (!users.selectedUsers.includes(user.id)) {
                    users.selectedUsers.push(user.id);
                }
            });
        } else {
            users.clearSelectedUsers();
        }
    };

    useEffect(() => {
        users.getAllUsers();
    }, []);

    return (
        <>
            <Layout>
                <Stack direction={'horizontal'} className='my-3 d-flex justify-content-center gap-2'>
                    <Button
                        onClick={() => {
                            users.blockUsers();
                        }}
                    >
                        Block
                    </Button>
                    <Button
                        image={UnblockIcon}
                        onClick={() => {
                            users.unblockUsers();
                        }}
                    >
                        Unblock
                    </Button>
                    <Button
                        image={DeleteIcon}
                        onClick={() => {
                            users.deleteUsers();
                        }}
                    >
                        Delete
                    </Button>
                </Stack>
                <UserTable
                    selectAll={selectAll}
                    selectedUsers={users.selectedUsers}
                    clearSelectedUsers={users.clearSelectedUsers}
                    onCheckboxClick={handleCheckboxClick}
                    users={users.users}
                ></UserTable>
            </Layout>
        </>
    );
});
