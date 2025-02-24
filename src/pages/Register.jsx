import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import { POST_ADD } from "../api/apiServices";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const requestData = {
      userName: formData.userName,
      userPassword: formData.userPassword,
      active: 1,
      role: { id: 1 },
      userDetails: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        street: "Default Street",
        streetNumber: "123",
        zipCode: "00000",
        locality: "Default Locality",
        country: "Default Country",
      },
    };

    try {
      const response = await POST_ADD(`/accounts/users`, requestData);
      console.log("Registration successful:", response);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-lg p-5" style={{ width: "600px", borderRadius: "12px" }}>
          <h2 className="text-center mb-4 text-primary fw-bold">Đăng ký</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Cột bên trái */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Tên đăng nhập</label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-3 py-2"
                    placeholder="Nhập username"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control rounded-pill px-3 py-2"
                    placeholder="Nhập mật khẩu"
                    name="userPassword"
                    value={formData.userPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Họ</label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-3 py-2"
                    placeholder="Nhập họ"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Cột bên phải */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-pill px-3 py-2"
                    placeholder="Nhập email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Tên</label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-3 py-2"
                    placeholder="Nhập tên"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control rounded-pill px-3 py-2"
                    placeholder="Nhập số điện thoại"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {error && <p className="text-danger text-center">{error}</p>}
            
            <div className="mb-3 text-center">
              <button
                className="btn btn-primary w-100 py-2 rounded-pill fw-bold"
                type="submit"
                style={{ transition: "0.3s" }}
              >
                Đăng ký
              </button>
            </div>

            <div className="text-center">
              <p className="mb-0">
                Đã có tài khoản?{" "}
                <a href="/login" className="text-decoration-none text-primary fw-bold">
                  Đăng nhập ngay
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
