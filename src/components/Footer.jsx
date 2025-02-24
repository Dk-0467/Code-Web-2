import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row ">
            {/* Column 1: About Us */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-4">Về chúng tôi</h5>
              <p className="text-white  ">
                Chúng tôi là cửa hàng điện tử hàng đầu, cung cấp các sản phẩm công nghệ mới nhất và chất lượng cao.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" className="text-white me-3" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" className="text-white me-3" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" className="text-white me-3" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" className="text-white" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-4">Liên kết nhanh</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-white  text-decoration-none">Trang chủ</a>
                </li>
                <li className="mb-2">
                  <a href="/products" className="text-white  text-decoration-none">Sản phẩm</a>
                </li>
                <li className="mb-2">
                  <a href="/about" className="text-white  text-decoration-none">Về chúng tôi</a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-white  text-decoration-none">Liên hệ</a>
                </li>
                <li className="mb-2">
                  <a href="/privacy-policy" className="text-white  text-decoration-none">Chính sách bảo mật</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-4">Thông tin liên hệ</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  <span className="text-white ">123 Đường ABC, Quận 1, TP.HCM, Việt Nam</span>
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone-alt me-2"></i>
                  <span className="text-white ">+84 123 456 789</span>
                </li>
                <li className="mb-2">
                  <i className="fas fa-envelope me-2"></i>
                  <span className="text-white ">support@electronicshop.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-3 border-top border-secondary">
          <p className="mb-0 text-white ">
            &copy; {new Date().getFullYear()} Electronics Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;