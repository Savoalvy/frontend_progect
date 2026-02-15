import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@entities/Counter';
import { BugButton } from '@app/providers/ErrorBoundary';
import { Input } from '@shared/ui/Input';

const MainPage = () => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
      <Counter />
      <Input
        placeholder={t('Введите текст')}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default MainPage;
