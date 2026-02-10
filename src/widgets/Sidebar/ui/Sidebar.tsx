import { useState } from 'react';

import { ThemeSwitcher } from '@shared/ui/ThemeSwitcher';
import { LangSwitcher } from '@shared/ui/LangSwitcher';
import { classNames } from '@shared/lib/classNames';
import { Button } from '@shared/ui/Button';
import s from './style.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        TOGGLE
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};
