export type Product = {
  quantitiesInCart: number;
  _id: number;
  name: string;
  make: string;
  imgUrl: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  rating: string;
  totalRatings: string;
  isAvailable: boolean;
  isWishlisted: boolean;
  isAddedToCart: boolean;
  isFastDelivery: boolean;
  availableSize?: ["XS", "S", "L", "XL", "XXL", "3XL"];
  categoryName?: "men" | "women" | "boys";
  count?: number;
  __v?: number;
};

export type ProductsState = {
  allProducts: Product[];
  cart: Product[];
  wishlist: Product[];
};

export type Props = {
  children: React.ReactNode;
};
type CartQuantity = {
  action: {
    type: "increment" | "decrement";
  };
};
export type ProductsApiState = {
  apiURL: string;
  method?: "GET" | "POST" | "DELETE";
  postMethodData?: CartQuantity | Product | {};
  encodedToken?: string;
};
export enum ProductsApiActions {
  USER_NOT_LOGGED_IN = "USER_NOT_LOGGED_IN",
  ADD_PRODUCT = "ADD_PRODUCT",
  GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
  GET_CART_PRODUCTS = "GET_CART_PRODUCTS",
  GET_WISHLIST_PRODUCTS = "GET_WISHLIST_PRODUCTS",
  ADD_TO_CART = "ADD_TO_CART",
  ADD_TO_WISHLIST = "ADD_TO_WISHLIST",
  UPDATE_CART_PRODUCT_QUANTITY = "UPDATE_CART_PRODUCT_QUANTITY",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST",
}
export type ProductsApiAction = {
  type: ProductsApiActions;
  payload?: any;
};

export enum ProductsActions {
  ADD_ALL_PRODUCTS = "ADD_ALL_PRODUCTS",
  SET_CART_PRODUCTS = "SET_CART_PRODUCTS",
  SET_WISHLIST_PRODUCTS = "SET_WISHLIST_PRODUCTS",
}
export type ProductsAction = {
  type: ProductsActions;
  payload?: any;
};
