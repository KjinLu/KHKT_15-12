import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const cx = classNames.bind(style);

export const Footer = () => {
  return <div className={cx('footer')}>THPT Châu Văn Liêmss</div>;
};
