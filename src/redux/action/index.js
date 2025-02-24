// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
// For Delete Item to Cart
export const delCart = (productId) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8813/cart?productId=${productId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    if (response.ok) {
      // Cập nhật Redux sau khi xóa thành công trên backend
      dispatch({
        type: "DELITEM",
        payload: productId,
      });
    } else {
      console.error("Không thể xóa sản phẩm:", await response.text());
    }
  } catch (error) {
    console.error("Lỗi khi xóa sản phẩm:", error);
  }
};
export const fetchCart = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8813/cart", {
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: "SETCART",
        payload: data, // Đặt lại toàn bộ giỏ hàng
      });
    } else {
      console.error("Lỗi khi lấy giỏ hàng:", await response.text());
    }
  } catch (error) {
    console.error("Lỗi kết nối:", error);
  }
};

export const updateCart = (productId, quantity) => {
    return {
      type: "UPDATE_CART",
      payload: { productId, quantity }
    };
  };

