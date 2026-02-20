import React, { useCallback, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button';
import { LoginModal } from '@features/AuthByUsername';
import {
  getUserAuthData,
  userAction,
} from '@entities/User';
import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userAction.logOut());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(s.navbar)}>
        <Button
          onClick={onLogOut}
          theme={ThemeButton.CLEAR_INVERTED}
          className={s.links}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

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

      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
};
