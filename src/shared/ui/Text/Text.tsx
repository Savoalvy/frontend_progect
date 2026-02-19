import { classNames } from '@shared/lib/classNames';
import { FC } from 'react';
import s from './style.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
  } = props;

  const mods: Record<string, boolean> = {
    [s[theme]]: true,
  };

  return (
    <div className={classNames(s.Text, mods, [className])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
};
