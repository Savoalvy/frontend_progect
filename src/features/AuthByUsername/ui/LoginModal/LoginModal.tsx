import { Modal } from '@shared/ui/Modal';

import { classNames } from '@shared/lib/classNames';
import { LoginForm } from '../LoginForm/LoginForm';
import s from './style.module.scss';

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
      className={classNames(s.LoginModal)}
    >
      <LoginForm />
    </Modal>
  );
};
