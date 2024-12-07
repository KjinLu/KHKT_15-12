import classNames from 'classnames/bind';
import style from './Home.module.scss';
import logo from '../../assets/images/logo.png';

const cx = classNames.bind(style);

export const Home = () => {
  return (
    <div className={cx('home')}>
      <div className={cx('main')}>
        <h1 className={cx('tittle')}>Bảng xếp hạng thi đua tập thể</h1>
        <div className={cx('block-main')}>
          <div className={cx('block')}>
            <div className={cx('block-child')}>
              <h2 className={cx('khoi-name')}>Khối 10</h2>
              <div className={cx('content-main')}>
                <div className={cx('content')}>
                  <p className={cx('rank')}>1</p>
                  <p className={cx('classRoom')}>10A1</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>2</p>
                  <p className={cx('classRoom')}>10A2</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>3</p>
                  <p className={cx('classRoom')}>10A3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('block')}>
            <div className={cx('block-child')}>
              <h2 className={cx('khoi-name')}>Khối 11</h2>
              <div className={cx('content-main')}>
                <div className={cx('content')}>
                  <p className={cx('rank')}>1</p>
                  <p className={cx('classRoom')}>11A1</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>2</p>
                  <p className={cx('classRoom')}>11A2</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>3</p>
                  <p className={cx('classRoom')}>11A3</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('block')}>
            <div className={cx('block-child')}>
              <h2 className={cx('khoi-name')}>Khối 12</h2>
              <div className={cx('content-main')}>
                <div className={cx('content')}>
                  <p className={cx('rank')}>1</p>
                  <p className={cx('classRoom')}>12A1</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>2</p>
                  <p className={cx('classRoom')}>12A2</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>3</p>
                  <p className={cx('classRoom')}>12A3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('main')}>
        <h1 className={cx('tittle')}>TOP 30 THI ĐUA ĐOÀN VIÊN THANH NIÊN</h1>
        <div className={cx('block-main')}>
          <div className={cx('block')}>
            <div className={cx('block-child')}>
              <h2 className={cx('khoi-name')}>Khối 10</h2>
              <div className={cx('content-main')}>
                <div className={cx('content')}>
                  <p className={cx('rank')}>1</p>
                  <p className={cx('classRoom')}>Nguyễn Văn A</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>2</p>
                  <p className={cx('classRoom')}>Nguyễn Văn B</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>3</p>
                  <p className={cx('classRoom')}>Nguyễn Văn C</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('block')}>
            <div className={cx('block-child')}>
              <h2 className={cx('khoi-name')}>Khối 11</h2>
              <div className={cx('content-main')}>
                <div className={cx('content')}>
                  <p className={cx('rank')}>1</p>
                  <p className={cx('classRoom')}>Nguyễn Văn A</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>2</p>
                  <p className={cx('classRoom')}>Nguyễn Văn B</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>3</p>
                  <p className={cx('classRoom')}>Nguyễn Văn C</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('block')}>
            <div className={cx('block-child')}>
              <h2 className={cx('khoi-name')}>Khối 12</h2>
              <div className={cx('content-main')}>
                <div className={cx('content')}>
                  <p className={cx('rank')}>1</p>
                  <p className={cx('classRoom')}>Nguyễn Văn A</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>2</p>
                  <p className={cx('classRoom')}>Nguyễn Văn B</p>
                </div>
                <div className={cx('content')}>
                  <p className={cx('rank')}>3</p>
                  <p className={cx('classRoom')}>Nguyễn Văn C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('main')}>
        <h1 className={cx('tittle')}>Vinh Danh</h1>
        <div className={cx('vinhdanh-main')}>
          <div className={cx('vinhdanh')}>
            <div className={cx('vinhdanh-child')}>
              <div className={cx('vinhdanh-image-main')}>
                <img className={cx('vinhdanh-image')} src={logo} alt="" />
              </div>
              <div className={cx('vinhdanh-content')}>
                <p className={cx('vinhdanh-name')}>Nguyễn Văn A</p>
                <p className={cx('vinhdanh-award')}>Đạt giải thưởng ABC</p>
                <p className={cx('vinhdanh-content')}>content</p>
              </div>
            </div>
          </div>
          <div className={cx('vinhdanh')}>
            <div className={cx('vinhdanh-child')}>
              <div className={cx('vinhdanh-image-main')}>
                <img className={cx('vinhdanh-image')} src={logo} alt="" />
              </div>
              <div className={cx('vinhdanh-content-main')}>
                <p className={cx('vinhdanh-name')}>Nguyễn Văn A</p>
                <p className={cx('vinhdanh-award')}>Đạt giải thưởng ABC</p>
                <p className={cx('vinhdanh-content')}>content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('main')}>
        <h1 className={cx('tittle')}>HOẠT ĐỘNG ĐOÀN-HỘI NỔI BẬT</h1>
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
