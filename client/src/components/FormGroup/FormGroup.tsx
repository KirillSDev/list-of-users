import { FC, useState } from 'react';
import Form from 'react-bootstrap/Form';
import cn from 'classnames';
import { Button } from '@components/Button/Button';
import styles from './FromGroup.module.scss';
import { IFormGroup } from './FormGroup.props';
import { loginUser } from '@api/auth/loginUser';
import { IFormData } from '@interfaces/FormData.interface';
export const FormGroup: FC<IFormGroup> = ({ type, ...props }): JSX.Element => {
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        password: '',
    });

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                loginUser(formData);
            }}
            {...props}
            className={cn('bg-warning', styles.container)}
        >
            <div className={styles['container__title']}>{type}</div>
            {type == 'Register' && (
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={(e) => {
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                ['name']: e.target.value,
                            }));
                        }}
                        type='text'
                        placeholder='Enter name'
                    ></Form.Control>
                </Form.Group>
            )}
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={(e) => {
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            ['email']: e.target.value,
                        }));
                    }}
                    type='email'
                    placeholder='Enter email'
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={(e) => {
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            ['password']: e.target.value,
                        }));
                    }}
                    type='password'
                    placeholder='Enter password'
                ></Form.Control>
            </Form.Group>
            <Button style={{ margin: '0 auto' }} apperance={'unprimary'}>
                {type}
            </Button>
        </Form>
    );
};
