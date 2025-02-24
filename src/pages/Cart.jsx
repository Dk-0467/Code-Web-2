import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delCart, fetchCart } from "../redux/action";
import axios from "axios"; // Import axios để gọi API
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchCart());
      } catch (error) {
        console.error("Lỗi khi tải giỏ hàng:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, [dispatch]);

  const removeItem = (productId) => {
    dispatch(delCart(productId));
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return; // Không cho phép số lượng nhỏ hơn 1

    try {
      const response = await axios.patch(
        `http://localhost:8813/cart?productId=${productId}&quantity=${quantity}`,
        {}, // PATCH không có body
        { withCredentials: true }
      );

      console.log("Cập nhật thành công", response.data);

      // Gọi lại fetchCart để cập nhật giỏ hàng
      dispatch(fetchCart());
    } catch (error) {
      console.error("Lỗi khi cập nhật số lượng:", error);
    }
  };

  const handleCheckout = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;
  
    if (!userId) {
      alert("Bạn cần đăng nhập trước khi thanh toán!");
      return;
    }
  
    try {
      const response = await axios.post(
        `http://localhost:8813/order/${userId}`,
        {},
        { withCredentials: true }
      );
  
      if (response.status === 201) {
        alert("Đặt hàng thành công!");
  
        // Xóa từng sản phẩm trong giỏ hàng
        cartItems.forEach((item) => {
          dispatch(delCart(item.product.id));
        });
  
        navigate("/");
      }
    } catch (error) {
      console.error("Lỗi khi thanh toán:", error);
      alert("Thanh toán thất bại, vui lòng thử lại.");
    }
  };
  
  const ShowCart = ({ cartItems = [], removeItem, updateQuantity }) => {
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return <p>Giỏ hàng trống.</p>;
    }

    const { subtotal, totalItems } = cartItems.reduce(
      (acc, item) => {
        acc.subtotal += item.subTotal;
        acc.totalItems += item.quantity;
        return acc;
      },
      { subtotal: 0, totalItems: 0 }
    );

    return (
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Danh sách mặt hàng</h5>
                </div>
                <div className="card-body">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="row d-flex align-items-center mb-4"
                    >
                      <div className="col-lg-3 col-md-12">
                        <img
                          className="img-fluid rounded shadow-sm"
                          src={item.product.image}
                          alt={item.product.productName}
                          width="150px"
                          height="150px"
                        />
                      </div>
                      <div className="col-lg-5 col-md-6">
                        <h5>
                          <strong>{item.product.productName}</strong>
                        </h5>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-outline-secondary btn-sm me-2"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 text-end">
                        <p className="mb-2">
                          <strong>
                            Tổng : {item.subTotal.toLocaleString("vi-VN")}₫
                          </strong>
                        </p>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} /> Xoá
                        </button>
                      </div>
                      <hr className="my-3" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Tóm tắt đơn hàng</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Số lượng sản phẩm: {totalItems}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Tổng cộng: {subtotal.toLocaleString("vi-VN")}₫
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0"></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <strong>Tổng thanh toán:</strong>
                      <span>{subtotal.toLocaleString("vi-VN")}₫</span>
                    </li>
                  </ul>
                  <button
                    className="btn btn-dark btn-lg btn-block"
                    onClick={handleCheckout}
                  >
                    Đi đến thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Đang tải...</span>
            </div>
          </div>
        ) : cartItems.length > 0 ? (
          <ShowCart
            cartItems={cartItems}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
        ) : (
          <p>Giỏ hàng trống.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
