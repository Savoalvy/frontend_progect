import React, { useCallback, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button';
import { LoginModal } from '@features/AuthByUsername';
import s from './style.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(s.navbar)}>
      <Button
        onClick={onShowModal}
        theme={ThemeButton.CLEAR_INVERTED}
        className={s.links}
      >
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  );
};
