import React from 'react';
import classNames from 'classnames/bind';
import style from './Navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const cx = classNames.bind(style);

export const Navbar = () => {
  const location = useLocation(); 

  return (
    <div className={cx('navbar')}>
      <div className={cx('navbar-logo')}>
        <img src={logo} alt="Logo" className={cx('logo')} />
      </div>
      <div className={cx('navbar-menu')}>
        <Link
          to="/"
          className={cx('navbar-link', { active: location.pathname === '/' })}
        >
          Trang chủ
        </Link>
        <Link
          to="/hoatdong"
          className={cx('navbar-link', { active: location.pathname === '/hoatdong' })}
        >
          Hoạt động
        </Link>
        <Link
          to="/caulacbo"
          className={cx('navbar-link', { active: location.pathname === '/caulacbo' })}
        >
          Câu lạc bộ
        </Link>
        <Link
          to="/sechia"
          className={cx('navbar-link', { active: location.pathname === '/sechia' })}
        >
          Sẻ chia & đóng góp
        </Link>
      </div>
      <div className={cx('navbar-links')}>
        <button className={cx('login-btn')}>Đăng nhập</button>
      </div>
    </div>
  );
};
