import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import styles from './Header.module.scss';
import { Button } from '@components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { authStore } from '@store/AuthStore';

export const Header: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isButtonsVisible, setButtonVisibility] = useState<boolean>(() => {
        return location.pathname !== '/users';
    });

    useEffect(() => {
        if (location.pathname.includes('/users')) setButtonVisibility(false);
    }, [location]);

    return (
        <Container fluid>
            <div className={cn('row bg-black text-white', styles.container)}>
                <h6 className='col-sm-2 text-center'>Test Project</h6>
                {isButtonsVisible ? (
                    <Stack direction={'horizontal'} className={cn('col-sm-10', styles.buttons)} gap={1}>
                        <Button
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            onClick={() => {
                                navigate('/register');
                            }}
                        >
                            Register
                        </Button>
                    </Stack>
                ) : (
                    <Stack direction={'horizontal'} className={cn('col-sm-10', styles.buttons)} gap={1}>
                        <Button
                            onClick={() => {
                                authStore.logout();
                            }}
                        >
                            Log out
                        </Button>
                    </Stack>
                )}
            </div>
        </Container>
    );
};
