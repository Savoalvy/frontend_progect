import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from '@shared/ui/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginAction } from '../../model/slice/loginSlice';
import s from './style.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } =
    useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginAction.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginAction.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(
      loginByUsername({
        username,
        password,
      }),
    );
  }, [dispatch, username, password]);

  return (
    <div className={classNames(s.loginForm)}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text text={error} theme={TextTheme.ERROR} />
      )}
      <Input
        autofocus
        placeholder={t('Введите username')}
        className={s.input}
        type='text'
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль')}
        className={s.input}
        type='text'
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={s.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
