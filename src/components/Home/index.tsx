import classNames from 'classnames/bind';
import style from './Home.module.scss';

const cx = classNames.bind(style);

export const Home = () => {
  return (
    <div className={cx('home')}>
      <div className={cx('main')}>
        <h1 className={cx('tittle')}>Bảng xếp hạng thi đua tập thể</h1>
        <div className={cx('block-main')}>
          <div className={cx('block')}>
            <h2 className={cx('khoi-name')}>Khối 10</h2>
            <div className={cx('content-main')}>
              <div className="content">
                <p className={cx('rank')}>1</p>
                <p className={cx('classRoom')}>10A1</p>
              </div>
              <div className="content">
                <p className={cx('rank')}>1</p>
                <p className={cx('classRoom')}>10A1</p>
              </div>
              <div className="content">
                <p className={cx('rank')}>1</p>
                <p className={cx('classRoom')}>10A1</p>
              </div>
            </div>
          </div>
          <div className={cx('block')}>
            <h2 className={cx('khoi-name')}>Khối 11</h2>
          </div>
          <div className={cx('block')}>
            <h2 className={cx('khoi-name')}>Khối 12</h2>
          </div>
        </div>
      </div>
      <div className={cx('main')}>
        <h1 className={cx('tittle')}>TOP 30 THI ĐUA ĐOÀN VIÊN THANH NIÊN</h1>
        <div className={cx('block-main')}>
          <div className={cx('block')}>
            <h2 className={cx('khoi-name')}>Khối 10</h2>
          </div>
          <div className={cx('block')}>
            <h2 className={cx('khoi-name')}>Khối 11</h2>
          </div>
          <div className={cx('block')}>
            <h2 className={cx('khoi-name')}>Khối 12</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
