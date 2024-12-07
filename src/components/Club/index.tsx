import classNames from 'classnames/bind';
import style from './Club.module.scss';
import logo from '../../assets/images/logo.png';

const cx = classNames.bind(style);

export const Club = () => {
  return (
    <div className={cx('home')}>
      <div className={cx('main')}>
        <h1 className={cx('tittle')}>Câu lạc bộ</h1>
        <div className={cx('hoatdong-main')}>
          <div className={cx('hoatdong')}>
            <div className={cx('hoatdong-child')}>
              <div className={cx('hoatdong-image-main')}>
                <img className={cx('hoatdong-image')} src={logo} alt="" />
              </div>
              <div className={cx('hoatdong-content-main')}>
                <p className={cx('hoatdong-name')}>Hoạt động ABC</p>
                <p className={cx('hoatdong-content')}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className={cx('hoatdong')}>
            <div className={cx('hoatdong-child')}>
              <div className={cx('hoatdong-image-main')}>
                <img className={cx('hoatdong-image')} src={logo} alt="" />
              </div>
              <div className={cx('hoatdong-content-main')}>
                <p className={cx('hoatdong-name')}>Hoạt động ABC</p>
                <p className={cx('hoatdong-content')}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
