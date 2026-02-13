import React from 'react';
import { classNames } from '@shared/lib/classNames';
import s from './style.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(s.navbar)}>
    <div className={s.links}>/</div>
  </div>
);
