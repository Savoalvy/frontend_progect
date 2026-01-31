import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';

import LightIcon from 'shared/assets/icons/light-theme-switcher.svg';
import DarkIcon from 'shared/assets/icons/dark-theme-switcher.svg';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';
import s from './style.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(s.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
