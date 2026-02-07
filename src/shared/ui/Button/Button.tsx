import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@shared/lib/classNames';
import s from './style.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(s.button, { [s[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
