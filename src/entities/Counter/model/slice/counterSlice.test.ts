import { counterAction, counterReducer, CounterSchema } from '@entities/Counter';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterAction.decrement)).toEqual({ value: 9 });
  });

  test('increment', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterAction.increment)).toEqual({ value: 11 });
  });

  test('empty', () => {
    const state: CounterSchema = undefined;
    expect(counterReducer(state, counterAction.increment)).toEqual({ value: 1 });
  });
});
