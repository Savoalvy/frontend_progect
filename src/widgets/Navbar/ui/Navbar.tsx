import React from 'react';

import { AppLink, AppLinkTheme } from '@shared/ui/AppLink';
import { classNames } from '@shared/lib/classNames';
import s from './style.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(s.navbar)}>
        <div className={s.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={s.mainLink}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="about">О сайте</AppLink>
        </div>
    </div>

);
