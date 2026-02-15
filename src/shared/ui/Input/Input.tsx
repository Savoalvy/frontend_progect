import { classNames } from '@shared/lib/classNames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { current } from '@reduxjs/toolkit';
import s from './style.module.scss';

// Omit - исключает определенные свойства. Первый параметр тип, второй параметр свойства, которые нужно исключить
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>();
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autofocus]);

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    },
    [onChange],
  );

  const onBlur = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const onSelect = (e: any) => {
    setCaretPosition(e.target.selectionStart ?? 0);
  };

  return (
    <div
      className={classNames(s.inputWrapper, {}, [
        className,
      ])}
    >
      {placeholder && (
        <div className={s.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={s.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={s.input}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={s.caret}
          />
        )}
      </div>
    </div>
  );
});
