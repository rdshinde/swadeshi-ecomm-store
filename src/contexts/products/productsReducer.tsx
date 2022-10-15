import {
  Product,
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
        cart: {
          ...state.cart,
          qty: payload.qty,
          products: [...payload.products],
        },
      };
    case ProductsActions.SET_WISHLIST_PRODUCTS:
      return {
        ...state,
        wishlist: {
          ...state.wishlist,
          qty: payload.qty,
          products: [...payload.products],
        },
      };
    case ProductsActions.USER_NOT_LOGGED_IN:
      return {
        ...state,
        wishlist: {
          qty: 0,
          products: [],
        },
        cart: {
          qty: 0,
          products: [],
        },
      };

    case ProductsActions.UPDATE_PRODUCTS_IN_CART:
      const updatedAllProducts = state.allProducts.map((product: Product) => {
        if (payload.some((pr: Product) => pr._id == product._id)) {
          return { ...product, isAddedToCart: true };
        } else {
          return { ...product };
        }
      });
      return {
        ...state,
        allProducts: [...updatedAllProducts],
      };

    case ProductsActions.UPDATE_PRODUCTS_IN_WISHLIST:
      const updatedProducts = state.allProducts.map((product: Product) => {
        if (payload.some((pr: Product) => pr._id == product._id)) {
          return { ...product, isWishlisted: true };
        } else {
          return { ...product };
        }
      });
      return {
        ...state,
        allProducts: [...updatedProducts],
      };

    default:
      return state;
  }
};
