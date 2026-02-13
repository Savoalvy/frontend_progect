import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button } from '@shared/ui/Button';
import { classNames } from '@shared/lib/classNames';
import { ThemeButton } from '@shared/ui/Button/Button';
import s from './style.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const languageVariable = short ? t('Язык короткий') : t('Язык полный');

  return (
    <Button className={classNames(s.langSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>
      {languageVariable}
    </Button>
  );
};
