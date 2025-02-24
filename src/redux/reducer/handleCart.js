// redux/reducer.js
const handleCart = (state = [], action) => {
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.product.id === action.payload.product.id);
      if (exist) {
        return state.map((x) =>
          x.product.id === action.payload.product.id
            ? { ...x, quantity: x.quantity + 1 }
            : x
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "DELITEM":
      const item = state.find((x) => x.product.id === action.payload);
      if (item.quantity === 1) {
        return state.filter((x) => x.product.id !== action.payload);
      } else {
        return state.map((x) =>
          x.product.id === action.payload
            ? { ...x, quantity: x.quantity - 1 }
            : x
        );
      }

    case "SETCART":
      return action.payload;

    case "UPDATE_CART":
      return state.map((item) =>
        item.product.id === action.payload.productId
          ? {
              ...item,
              quantity: action.payload.quantity,
              subTotal: item.product.price * action.payload.quantity,
            }
          : item
      );

    default:
      return state;
  }
};

export default handleCart;
