import {classNames} from "shared/lib/classNames/classNames";
import s from './style.module.scss'
import {FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps {
    className?: string;
    theme: ThemeButton;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {

    const {className, children, theme, ...rest} = props;

    return (
        <button
            className={classNames(s.button, {}, [className,  s[theme]])}
            {...rest}
        >
            {children}
        </button>

    );
};