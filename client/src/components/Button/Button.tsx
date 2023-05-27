import { FC } from 'react';
import { IButton } from './Button.props';
import { Col, Row } from 'react-bootstrap';
import styles from './Button.module.scss';
import cn from 'classnames';
export const Button: FC<IButton> = ({ children, apperance = 'primary', ...props }): JSX.Element => {
    return (
        <button
            className={cn(styles.button, {
                ['bg-warning']: apperance === 'primary',
                ['bg-black text-white']: apperance === 'unprimary',
            })}
            {...props}
        >
            {children}
        </button>
    );
};
