import { Button } from '@shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction, getCounterValue } from '@entities/Counter';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button data-testid='increment-btn' onClick={increment}>
        {t('Инкремент')}
      </Button>

      <Button data-testid='decrement-btn' onClick={decrement}>
        {t('Декремент')}
      </Button>
    </div>
  );
};
