import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from '@shared/ui/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import {
  loginAction,
  loginReducer,
} from '../../model/slice/loginSlice';
import s from './style.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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
    <DynamicModuleLoader reducers={initialReducers}>
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
          value={username ?? ''}
        />
        <Input
          placeholder={t('Введите пароль')}
          className={s.input}
          type='text'
          onChange={onChangePassword}
          value={password ?? ''}
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
