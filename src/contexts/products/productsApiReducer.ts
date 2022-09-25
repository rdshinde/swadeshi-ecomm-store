import {
  ProductsApiState,
  ProductsApiAction,
  ProductsApiActions,
} from "./ProductsTypesDeclaration";

export const productsApiReducer = (
  state: ProductsApiState,
  action: ProductsApiAction
): ProductsApiState => {
  const { type, payload } = action;
  switch (type) {
    case ProductsApiActions.GET_ALL_PRODUCTS:
      return {
        ...state,
        apiURL: "/products",
        method: "GET",
      };
    case ProductsApiActions.GET_CART_PRODUCTS:
      return {
        ...state,
        apiURL: "/user/cart",
        method: "GET",
      };
    case ProductsApiActions.GET_WISHLIST_PRODUCTS:
      return {
        ...state,
        apiURL: "user/wishlist",
        method: "GET",
      };
    case ProductsApiActions.ADD_TO_CART:
      return {
        ...state,
        apiURL: "/user/cart",
        method: "POST",
        postMethodData: { ...payload },
      };
    case ProductsApiActions.ADD_TO_WISHLIST:
      return {
        ...state,
        apiURL: "/user/wishlist",
        method: "POST",
        postMethodData: { ...payload },
      };
    case ProductsApiActions.UPDATE_CART_PRODUCT_QUANTITY:
      return {
        ...state,
        apiURL: "/user/cart",
        method: "POST",
        postMethodData: {
          action: {
            type: payload.action,
          },
        },
      };
    case ProductsApiActions.REMOVE_FROM_CART:
      return {
        ...state,
        apiURL: `/user/cart/${payload}`,
        method: "DELETE",
      };
    case ProductsApiActions.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        apiURL: `/user/wishlist/${payload}`,
        method: "DELETE",
      };
    case ProductsApiActions.ADD_PRODUCT:
      return {
        ...state,
        apiURL: "/products",
        method: "POST",
      };
    case ProductsApiActions.USER_NOT_LOGGED_IN:
      return {
        ...state,
        apiURL: "",
        method: "GET",
        postMethodData: {},
      };
    default:
      return state;
  }
};
