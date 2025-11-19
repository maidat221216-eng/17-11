import "./assets/css/main.css";
import anhlogo from "./assets/images/hinh1.png";
import backgroundImage from "./assets/images/hinh2.jpg";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="layout-wrapper">
      {/* Header */}
      <header className="header1">
        <div className="banner1">
          {/* 🔵 LOGO BÊN TRÁI */}
          <div className="logo1">
            <img src={anhlogo} width="260" alt="Logo" />
          </div>

          {/* 🟣 MENU GIỮA */}
          <div id="topleft">
            <ul className="ul1">
              <li>
                <a href="/">TRANG CHỦ</a>
              </li>
              <li>
                <a href="/trang1">EGOV</a>
              </li>
              <li>
                <a href="/admin/products">QUẢN TRỊ</a>
              </li>
            </ul>
          </div>

          {/* 🔴 USER/LOGIN BÊN PHẢI */}
          <div className="menubar-right">
            {user ? (
              <>
                <span className="username">👤 {user.username}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <a href="/login" className="login-link">
                Đăng nhập
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {location.pathname === "/" && (
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/E7kcUv_-n5c"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-frame"
            ></iframe>
          )}
        </div>

        <div className="page-container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Layout;
