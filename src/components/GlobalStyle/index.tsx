import { ReactNode } from 'react';
import style from './GlobalStyle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

interface GlobalStyleProps {
  children: ReactNode;
}

export const GlobalStyle = ({ children }: GlobalStyleProps) => {
  return <div className={cx('main')}>{children}</div>;
};
