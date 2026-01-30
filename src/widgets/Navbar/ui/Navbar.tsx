import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import s from './style.module.scss'
import {AppLink} from "shared/ui";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(s.navbar)}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={s.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'about'}>О сайте</AppLink>
            </div>
        </div>

    );
};
