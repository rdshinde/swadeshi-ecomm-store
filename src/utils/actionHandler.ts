import {
  Product,
  ProductsApiActions,
} from "../contexts/products/ProductsTypesDeclaration";
import { Toast } from "./toast";

export const addToCart = (item: Product, productsApiDispatch: Function) => {
  productsApiDispatch({
    type: ProductsApiActions.ADD_TO_CART,
    payload: item,
  });
};

export const addToWishlist = (
  item: Product,
  productsApiDispatch: Function,
  wishlistItem: Product[]
) => {
  if (wishlistItem.some((wishlistItem) => wishlistItem._id === item._id)) {
    removeFromWishlist(item._id, productsApiDispatch);
  } else {
    productsApiDispatch({
      type: ProductsApiActions.ADD_TO_WISHLIST,
      payload: item,
    });
  }
};

export const removeFromCart = (id: number, productsApiDispatch: Function) => {
  productsApiDispatch({
    type: ProductsApiActions.REMOVE_FROM_CART,
    payload: id,
  });
};

export const removeFromWishlist = (
  id: number,
  productsApiDispatch: Function
) => {
  productsApiDispatch({
    type: ProductsApiActions.REMOVE_FROM_WISHLIST,
    payload: id,
  });
};

export const moveToWishlist = (
  item: Product,
  productsApiDispatch: Function,
  wishlistItems: Product[]
) => {
  let setTimeOutId: ReturnType<typeof setTimeout>;
  setTimeOutId = setTimeout(() => {
    productsApiDispatch({
      type: ProductsApiActions.REMOVE_FROM_CART,
      payload: item._id,
    });
  }, 0);
  if (wishlistItems.some((wishlistItem) => wishlistItem._id === item._id)) {
    Toast({ message: "Item already in wishlist", type: "error" });
  } else {
    productsApiDispatch({
      type: ProductsApiActions.ADD_TO_WISHLIST,
      payload: item,
    });
  }
  return () => clearTimeout(setTimeOutId);
};

export const moveToCart = (
  item: Product,
  productsApiDispatch: Function,
  cartItems: Product[]
) => {
  let setTimeOutId: ReturnType<typeof setTimeout>;
  setTimeOutId = setTimeout(() => {
    productsApiDispatch({
      type: ProductsApiActions.REMOVE_FROM_WISHLIST,
      payload: item._id,
    });
  }, 0);

  if (cartItems.some((product) => product._id === item._id)) {
    productsApiDispatch({
      type: ProductsApiActions.UPDATE_CART_PRODUCT_QUANTITY,
      payload: { id: item._id, action: "increment" },
    });
  } else {
    productsApiDispatch({
      type: ProductsApiActions.ADD_TO_CART,
      payload: item,
    });
  }
  Toast({ message: "Item moved to cart", type: "success" });
  return () => clearTimeout(setTimeOutId);
};

export const incrementQuantity = (
  id: number,
  productsApiDispatch: Function
) => {
  productsApiDispatch({
    type: ProductsApiActions.UPDATE_CART_PRODUCT_QUANTITY,
    payload: { action: "increment", id: id },
  });
};

export const decrementQuantity = (
  id: number,
  productsApiDispatch: Function
) => {
  productsApiDispatch({
    type: ProductsApiActions.UPDATE_CART_PRODUCT_QUANTITY,
    payload: { action: "decrement", id: id },
  });
};
