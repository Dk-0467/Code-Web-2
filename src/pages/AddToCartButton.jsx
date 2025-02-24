// components/AddToCartButton.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import toast from "react-hot-toast";

const AddToCartButton = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const addProduct = async (product) => {
    const productId = product.id;
    try {
      const response = await fetch(
        `http://localhost:8813/cart?productId=${productId}&quantity=${quantity}`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (response.ok) {
        dispatch(addCart(product));
        const updatedCart = await response.json();
        toast.success("Đã thêm vào giỏ hàng!");
        console.log("Cập nhật giỏ hàng:", updatedCart);
      } else {
        dispatch(addCart(product));
        toast.success("Đã thêm vào giỏ hàng!");
        console.error("API lỗi:", await response.text());
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  return (
    <button
      className="btn btn-outline-dark"
      style={{
        borderColor: "#0060c9",
        color: "#09122C",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#0060c9";
        e.target.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#0060c9";
      }}
      onClick={() => addProduct(product)}
    >
      Thêm vào giỏ
    </button>
  );
};

export default AddToCartButton;
