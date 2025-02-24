import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const user = JSON.parse(localStorage.getItem("user"));
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.trim()) {
        try {
          const response = await axios.get(
            `http://localhost:8810/products/search?keyword=${searchTerm}`
          );
          setSearchResults(response.data);
        } catch (error) {
          console.error("Lỗi khi tìm kiếm:", error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSelectProduct = (productId) => {
    navigate(`/product/${productId}`);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* LOGO */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/logo.webp"
            alt="Shoppe Logo"
            className="logo-img"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold" to="/product">
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold" to="/about">
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-semibold" to="/contact">
                Liên hệ
              </NavLink>
            </li>
          </ul>

          <div className="position-relative mx-3" style={{ width: "400px" }}>
            <input
              className="form-control rounded-pill px-4 w-100"
              type="search"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ height: "40px" }}
            />
            {searchResults.length > 0 && (
              <ul
                className="list-group position-absolute w-100 shadow bg-white rounded mt-1 overflow-auto z-50 border"
                style={{ maxHeight: "700px" }}
              >
                {searchResults.map((product) => (
                  <li
                    key={product.id}
                    className="list-group-item list-group-item-action d-flex align-items-center"
                    onClick={() => handleSelectProduct(product.id)}
                    style={{
                      cursor: "pointer",
                      transition: "background 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      e.currentTarget.classList.add("bg-primary", "text-white")
                    }
                    onMouseLeave={(e) =>
                      e.currentTarget.classList.remove(
                        "bg-primary",
                        "text-white"
                      )
                    }
                  >
                    <img
                      src={product.image}
                      alt={product.productName}
                      className="rounded me-3"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex-grow-1">
                      <p className="mb-1 fw-bold">{product.productName}</p>
                      <p className="mb-0 text-danger fw-semibold">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.price)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="d-flex align-items-center">
            {user ? (
              <>
                <span className="mx-2 fw-bold text-primary">
                  Xin chào, {user.userName}
                </span>
                <button
                  className="btn btn-outline-danger mx-2 px-3"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt me-1"></i> Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-outline-primary mx-2 px-3"
                >
                  <i className="fas fa-sign-in-alt me-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-primary mx-2 px-3">
                  <i className="fas fa-user-plus me-1"></i> Register
                </NavLink>
              </>
            )}

            <NavLink
              to="/cart"
              className="btn btn-outline-dark mx-2 px-3 position-relative"
            >
              <i className="fas fa-shopping-cart me-1"></i> Cart
              {state.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {state.length}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// CSS nội bộ
const styles = `
  .logo-img {
    height: 80px;
    width: auto;
    max-width: 300px;
    object-fit: contain;
    transition: transform 0.3s ease-in-out;
  }

  .logo-img:hover {
    transform: scale(1.1);
  }
`;

// Thêm CSS vào trang
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Navbar;
