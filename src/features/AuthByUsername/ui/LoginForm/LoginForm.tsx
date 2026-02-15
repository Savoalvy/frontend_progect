import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import s from './style.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({
  className,
}: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.loginForm)}>
      <Input
        autofocus
        placeholder={t('Введите username')}
        className={s.input}
        type='text'
      />
      <Input
        placeholder={t('Введите пароль')}
        className={s.input}
        type='text'
      />
      <Button className={s.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
