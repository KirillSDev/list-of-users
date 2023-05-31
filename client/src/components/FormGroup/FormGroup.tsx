import { FC, useState } from 'react';
import Form from 'react-bootstrap/Form';
import cn from 'classnames';
import { Button } from '@components/Button/Button';
import styles from './FromGroup.module.scss';
import { IFormGroup } from './FormGroup.props';
import { IFormData } from '@interfaces/FormData.interface';
import { validateForm } from '@utils/validators/validateForm';
import { authStore } from '@store/AuthStore';
import { AuthService } from '@services/AuthService';

export const FormGroup: FC<IFormGroup> = ({ type, ...props }): JSX.Element => {
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        password: '',
    });

    const onChangeForm = (e: React.ChangeEvent<any>, name: string) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: e.target.value,
        }));
    };

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm(formData, type)) {
            authStore.setMessage('Fields must not be empty!');
        } else {
            ActionType.LOGIN == type ? AuthService.loginUser(formData) : AuthService.registerUser(formData);
            setFormData({
                name: '',
                email: '',
                password: '',
            });
        }
    };
    enum ActionType {
        LOGIN = 'Login',
        REGISTER = 'Register',
    }

    return (
        <Form
            onSubmit={(e) => {
                submitForm(e);
            }}
            {...props}
            className={cn('bg-warning', styles.container)}
        >
            <div className={styles['container__title']}>{type}</div>
            {ActionType.REGISTER == type && (
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={(e) => {
                            onChangeForm(e, 'name');
                        }}
                        value={formData.name}
                        type='text'
                        placeholder='Enter name'
                    ></Form.Control>
                </Form.Group>
            )}
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    onChange={(e) => {
                        onChangeForm(e, 'email');
                    }}
                    value={formData.email}
                    type='email'
                    placeholder='Enter email'
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={(e) => {
                        onChangeForm(e, 'password');
                    }}
                    value={formData.password}
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
