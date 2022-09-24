import {
  ProductsAction,
  ProductsActions,
  ProductsState,
} from "./ProductsTypesDeclaration";

export const productsReducer = (
  state: ProductsState,
  action: ProductsAction
): ProductsState => {
  const { type, payload } = action;
  switch (type) {
    case ProductsActions.ADD_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: [...payload],
      };
    case ProductsActions.SET_CART_PRODUCTS:
      return {
        ...state,
        cart: [...payload],
      };
    case ProductsActions.SET_WISHLIST_PRODUCTS:
      return {
        ...state,
        wishlist: [...payload],
      };
    default:
      return state;
  }
};
