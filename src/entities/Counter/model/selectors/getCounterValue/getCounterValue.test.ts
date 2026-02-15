import { getCounterValue } from '@entities/Counter';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@app/providers/StoreProvider';

describe('getCounterValue.test', () => {
  test('getCounterValue', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(
      10,
    );
  });
});
