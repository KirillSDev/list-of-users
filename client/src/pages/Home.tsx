import { FormGroup } from '@components/FormGroup/FormGroup';
import { Layout } from '../layout/Layout';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Home: FC = (): JSX.Element => {
    const location = useLocation();
    const [typeForm, setTypeForm] = useState<string>('login');
    useEffect(() => {
        setTypeForm(location.pathname.slice(1));
    }, [location]);
    return (
        <Layout>
            <FormGroup type={typeForm === 'login' ? 'Login' : 'Register'}></FormGroup>
        </Layout>
    );
};
