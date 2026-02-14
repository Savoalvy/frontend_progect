import React, { useCallback, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button';
import { Modal } from '@shared/ui/Modal';
import s from './style.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(s.navbar)}>
      <Button onClick={onToggleModal} theme={ThemeButton.CLEAR_INVERTED} className={s.links}>
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque eius error laborum
        magnam odit rem temporibus totam? Dolorem illum ipsa laboriosam maiores minus ratione. Culpa
        cumque maxime optio voluptatibus.
      </Modal>
    </div>
  );
};
