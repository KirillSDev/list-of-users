import { FC } from 'react';
import Form from 'react-bootstrap/Form';
import cn from 'classnames';
import { Button } from '@components/Button/Button';
import styles from './FromGroup.module.scss';
import { IFormGroup } from './FormGroup.props';
export const FormGroup: FC<IFormGroup> = ({ type }): JSX.Element => {
    return (
        <Form className={cn('bg-warning', styles.container)}>
            <div className={styles['container__title']}>{type}</div>
            {type == 'Register' && (
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name'></Form.Control>
                </Form.Group>
            )}
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter email'></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password'></Form.Control>
            </Form.Group>
            <Button style={{ margin: '0 auto' }} apperance={'unprimary'}>
                {type}
            </Button>
        </Form>
    );
};
