import { ChangeEvent, FC } from 'react';
import { Table } from 'react-bootstrap';
import { IUserTable } from './UserTable.props';
import { formatDate } from '@utils/formatters/formatDate';
import { observer } from 'mobx-react';

export const UserTable: FC<IUserTable> = observer(
    ({ users, selectAll, selectedUsers, onCheckboxClick, clearSelectedUsers }): JSX.Element => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <input
                                type={'checkbox'}
                                checked={selectedUsers.length === users.length && selectedUsers.length > 0}
                                onChange={(e) => {
                                    selectAll(e);
                                }}
                            ></input>
                        </th>
                        <th>#</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Date of registration</th>
                        <th>Last login date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) => {
                        return (
                            <tr key={user.id}>
                                <th scope='row'>
                                    <input
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={(e) => {
                                            onCheckboxClick(e, user);
                                        }}
                                        type={'checkbox'}
                                    ></input>
                                </th>
                                <td>{idx + 1}</td>
                                <td className='text-break'>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{formatDate(user.dateRegistration)}</td>
                                <td>{formatDate(user.lastLoginDate)}</td>
                                <td>{user.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
);
