import { Modal } from '@shared/ui/Modal';

import { classNames } from '@shared/lib/classNames';
import { Suspense } from 'react';
import { Loader } from '@shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('')}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
