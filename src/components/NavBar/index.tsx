import classNames from 'classnames/bind';
import style from './Navbar.module.scss';
const cx = classNames.bind(style);

export const Navbar = () => {
  return (
    <div className={cx('navbar')}>
      <div className={cx('navbar-logo')}>
        <img src="logo.png" alt="Logo" className={cx('logo')} />
      </div>
      <div className={cx('navbar-menu')}>
        <div>Trang chủ</div>
        <div>Hoạt động</div>
        <div>Câu lạc bộ</div>
        <div>Sẻ chia & đóng góp</div>
      </div>
      <div className={cx('navbar-links')}>
        <button className={cx('login-btn')}>Đăng nhập</button>
      </div>
    </div>
  );
};
