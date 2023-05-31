import { Layout } from '../layout/Layout';
import { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ModalComponent } from '@components/Modal/Modal';
import { authStore } from '@store/AuthStore';
import { observer } from 'mobx-react';
import { Loading } from '@components/Loading/Loading';

export const Home: FC = observer((): JSX.Element => {
    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const closeModal = () => {
        setShow(false);
        authStore.clearMessage();
    };
    useEffect(() => {
        if (authStore.message) {
            setShow(true);
        }
        if (authStore.isAuthenticated) {
            navigate('/users');
        }
    }, [authStore.message, authStore.isAuthenticated]);

    return (
        <Layout>
            <Loading status={authStore.loading} />
            <Outlet />
            <ModalComponent message={authStore.message} show={show} closeModal={closeModal}></ModalComponent>
        </Layout>
    );
});
