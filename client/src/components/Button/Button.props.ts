import { DetailedHTMLProps, HTMLAttributes, ReactNode, SVGProps } from 'react';

export interface IButton extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    apperance?: 'primary' | 'unprimary';
    image?: string;
}
