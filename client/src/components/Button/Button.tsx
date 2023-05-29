import { FC } from 'react';
import { IButton } from './Button.props';

import styles from './Button.module.scss';
import cn from 'classnames';
export const Button: FC<IButton> = ({ image, children, apperance = 'primary', ...props }): JSX.Element => {
    return (
        <button
            className={cn(styles.button, 'd-flex justify-content-center gap-1 align-items-center', {
                ['bg-warning']: apperance === 'primary',
                ['bg-black text-white']: apperance === 'unprimary',
            })}
            {...props}
        >
            {children}
            {image && <img src={image} alt='icon' height={20}></img>}
        </button>
    );
};
