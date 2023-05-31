import { FC, useEffect } from 'react';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage';
import { FormGroup } from '@components/FormGroup/FormGroup';
import { PrivateRoute } from '@components/PrivateRoute/PrivateRoute';
import { observer } from 'mobx-react';
import { authStore } from '@store/AuthStore';
import { AuthService } from './services/AuthService';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = observer((): JSX.Element => {
    useEffect(() => {
        AuthService.validateToken();
    }, []);
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Home />} />
            <Route path={'/register'} element={<Home />} />
            <Route path={'/users'} element={<UsersPage />} />
        </Routes>
    );
});

export default App;
