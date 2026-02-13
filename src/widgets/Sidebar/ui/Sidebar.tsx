import { useState } from 'react';

import { ThemeSwitcher } from '@shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@shared/ui/LangSwitcher';
import { classNames } from '@shared/lib/classNames';
import { Button, SizeButton, ThemeButton } from '@shared/ui/Button';
import { AppLink, AppLinkTheme } from '@shared/ui/AppLink';
import { RoutePath } from '@shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import AboutIcon from '@shared/assets/icons/light-theme-icon-about.svg';
import MainIcon from '@shared/assets/icons/light-theme-icon-main.svg';

import s from './style.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  const shortMain = collapsed ? '' : t('Текст ссылки на главную');
  const shortAbout = collapsed ? '' : t('Текст ссылки о сайте');

  return (
    <div data-testid='sidebar' className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}>
      <Button
        data-testid='sidebar-toggle'
        onClick={onToggle}
        className={s.collapseBtn}
        theme={ThemeButton.BACKGROUND}
        square
        size={SizeButton.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={s.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={s.link}>
          <MainIcon className={s.icon} />
          {shortMain}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={s.link}>
          <AboutIcon className={s.icon} />
          {shortAbout}
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} short={collapsed} />
      </div>
    </div>
  );
};
