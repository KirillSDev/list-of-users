import { FC } from 'react';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Home />} />
            <Route path={'/register'} element={<Home />} />
            <Route path={'/users'} element={<UsersPage />} />
        </Routes>
    );
};

export default App;
