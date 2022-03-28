const cartAndWishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMPTY_CART":
      return {
        ...state,
        apiURL: "",
        apiMethod: "",
        postData: {
          products: {},
        },
      };
    case "GET_CART_ITEMS":
      return {
        ...state,
        apiURL: "/api/user/cart",
        apiMethod: "GET",
        postData: {
          products: {},
        },
      };
    case "ADD_TO_CART":
      return {
        ...state,
        apiURL: "/api/user/cart",
        apiMethod: "POST",
        postData: {
          product: { ...payload },
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        apiURL: `/api/user/cart/${payload}`,
        apiMethod: "DELETE",
        postData: {
          product: {},
        },
      };
    case "UPDATE_CART_ITEM_QUANTITY":
      return {
        ...state,
        apiURL: `/api/user/cart/${payload.id}`,
        apiMethod: "POST",
        postData: {
          action: { type: payload.action },
        },
      };
    case "GET_WISHLIST_ITEMS":
      return {
        ...state,
        apiURL: "/api/user/wishlist",
        apiMethod: "GET",
        postData: { product: {} },
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        apiURL: `/api/user/wishlist`,
        apiMethod: "POST",
        postData: {
          product: { ...payload },
        },
      };
    case "DELETE_FROM_WISHLIST":
      return {
        ...state,
        apiURL: `/api/user/wishlist/${payload}`,
        apiMethod: "DELETE",
        postData: {
          product: {},
        },
      };
    default:
      return { ...state };
  }
};
export { cartAndWishlistReducer };
