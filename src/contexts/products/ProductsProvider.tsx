import { useReducer, useContext, createContext, useEffect } from "react";
import { useFetch } from "../../services";
import { useAuth } from "../auth/AuthProvider";
import { productsApiReducer } from "./productsApiReducer";
import { productsReducer } from "./productsReducer";
import {
  ProductsActions,
  ProductsApiActions,
  ProductsApiState,
  ProductsState,
  Props,
} from "./ProductsTypesDeclaration";

const initialProductsState: ProductsState = {
  allProducts: [],
  cart: { qty: 0, products: [] },
  wishlist: { qty: 0, products: [] },
};

const initialProductsApiState: ProductsApiState = {
  apiURL: "",
  method: "GET",
  postMethodData: {},
  encodedToken: "",
};

const ProductContext = createContext<ProductsState | any>(initialProductsState);

export const useProducts = () => useContext(ProductContext);

export const ProductsProvider = ({ children }: Props): JSX.Element => {
  const [productState, productsDispatch] = useReducer(
    productsReducer,
    initialProductsState
  );
  const [prductsApiState, productsApiDispatch] = useReducer(
    productsApiReducer,
    initialProductsApiState
  );
  const {
    userAuthState: { encodedToken, isUserLoggedIn },
  } = useAuth();

  const { apiURL, method, postMethodData }: any = prductsApiState;
  const { serverResponse, isLoading, error } = useFetch(
    apiURL,
    method,
    postMethodData,
    encodedToken
  );
  useEffect(() => {
    if (serverResponse) {
      if (serverResponse.data?.products) {
        productsDispatch({
          type: ProductsActions.ADD_ALL_PRODUCTS,
          payload: serverResponse.data.products,
        });
      } else if (serverResponse.data?.cart?.qty) {
        productsDispatch({
          type: ProductsActions.SET_CART_PRODUCTS,
          payload: serverResponse.data.cart,
        });
      } else if (serverResponse.data?.wishlist?.qty) {
        productsDispatch({
          type: ProductsActions.SET_WISHLIST_PRODUCTS,
          payload: serverResponse.data.wishlist,
        });
      }
    }
  }, [serverResponse]);

  useEffect(() => {
    let setTimeOutId: ReturnType<typeof setTimeout>;
    if (isUserLoggedIn) {
      setTimeOutId = setTimeout(() => {
        productsApiDispatch({
          type: ProductsApiActions.GET_CART_PRODUCTS,
        });
      }, 0);
      setTimeOutId = setTimeout(() => {
        productsApiDispatch({
          type: ProductsApiActions.GET_WISHLIST_PRODUCTS,
        });
      }, 0);
    } else {
      productsApiDispatch({ type: ProductsApiActions.USER_NOT_LOGGED_IN });
    }
    return () => clearTimeout(setTimeOutId);
  }, [isUserLoggedIn]);

  useEffect(() => {
    productsApiDispatch({ type: ProductsApiActions.GET_ALL_PRODUCTS });
  }, [productState.cart, productState.wishlist]);

  return (
    <ProductContext.Provider
      value={{
        productState,
        isLoading,
        error,
        productsDispatch,
        productsApiDispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
