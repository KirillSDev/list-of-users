import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import styles from './Layout.module.scss';

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>{children}</main>
        </div>
    );
};
