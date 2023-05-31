import { FC } from 'react';
import { ILoadingProps } from './Loading.props';
export const Loading: FC<ILoadingProps> = ({ status }): JSX.Element => {
    return (
        <>
            {status && (
                <div className='d-flex justify-content-center m-5'>
                    <div className='spinner-border' role='status'></div>
                </div>
            )}
        </>
    );
};
