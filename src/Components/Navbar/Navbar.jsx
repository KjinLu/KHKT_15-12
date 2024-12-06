import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-menu">
        <div>Trang chủ</div>
        <div>Hoạt động</div>
        <div>Câu lạc bộ</div>
        <div>Sẻ chia & đóng góp</div>
      </div>
      <div className="navbar-links">
        <button className="login-btn">Đăng nhập</button>
      </div>
    </div>
  )
}
