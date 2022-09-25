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
