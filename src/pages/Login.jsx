import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCart } from "../redux/action";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8811/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        document.cookie = `token=${token}; path=/; max-age=86400; Secure; HttpOnly`;
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(fetchCart());
        navigate("/");
      } else {
        alert("Đăng nhập không thành công!");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-lg p-5" style={{ width: "400px", borderRadius: "12px" }}>
          <h2 className="text-center mb-4 text-primary fw-bold">Đăng nhập</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Tên đăng nhập</label>
              <input
                type="text"
                className="form-control rounded-pill px-3 py-2"
                placeholder="Nhập username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Mật khẩu</label>
              <input
                type="password"
                className="form-control rounded-pill px-3 py-2"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <button
                className="btn btn-primary w-100 py-2 rounded-pill fw-bold"
                type="submit"
                style={{ transition: "0.3s" }}
              >
                Đăng nhập
              </button>
            </div>
            <div className="text-center">
              <p className="mb-0">
                Chưa có tài khoản? {" "}
                <Link to="/register" className="text-decoration-none text-primary fw-bold">
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
