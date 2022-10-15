import {
  Product,
  ProductsApiActions,
} from "../contexts/products/ProductsTypesDeclaration";

export const addToCart = (item: Product, productsApiDispatch: Function) => {
  productsApiDispatch({
    type: ProductsApiActions.ADD_TO_CART,
    payload: item,
  });
};

export const addToWishlist = (item: Product, productsApiDispatch: Function) => {
  productsApiDispatch({
    type: ProductsApiActions.ADD_TO_WISHLIST,
    payload: item,
  });
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
  productsApiDispatch: Function
) => {
  productsApiDispatch({
    type: ProductsApiActions.REMOVE_FROM_CART,
    payload: item,
  });
  productsApiDispatch({
    type: ProductsApiActions.ADD_TO_WISHLIST,
    payload: item,
  });
};

export const moveToCart = (item: Product, productsApiDispatch: Function) => {
  productsApiDispatch({
    type: ProductsApiActions.REMOVE_FROM_WISHLIST,
    payload: item,
  });
  productsApiDispatch({
    type: ProductsApiActions.ADD_TO_CART,
    payload: item,
  });
};

export const incrementQuantity = (
  item: Product,
  productsApiDispatch: Function
) => {
  productsApiDispatch({
    type: ProductsApiActions.UPDATE_CART_PRODUCT_QUANTITY,
    payload: { action: { type: "increment" }, item },
  });
};

export const decrementQuantity = (
  item: Product,
  productsApiDispatch: Function
) => {
  productsApiDispatch({
    type: ProductsApiActions.UPDATE_CART_PRODUCT_QUANTITY,
    payload: { action: { type: "decrement" }, item },
  });
};
