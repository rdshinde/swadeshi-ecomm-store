import { type } from "os";
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
  cart: [],
  wishlist: [],
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
      } else if (serverResponse.data?.cart) {
        productsDispatch({
          type: ProductsActions.SET_CART_PRODUCTS,
          payload: serverResponse.data.cart,
        });
      } else if (serverResponse.data?.wishlist) {
        productsDispatch({
          type: ProductsActions.SET_WISHLIST_PRODUCTS,
          payload: serverResponse.data.wishlist,
        });
      }
    }
  }, [serverResponse]);

  useEffect(() => {
    productsApiDispatch({ type: ProductsApiActions.GET_ALL_PRODUCTS });
    let setTimeOutId: ReturnType<typeof setTimeout>;
    setTimeOutId = setTimeout(() => {
      if (!isUserLoggedIn) {
        productsApiDispatch({ type: ProductsApiActions.USER_NOT_LOGGED_IN });
      } else {
        productsApiDispatch({ type: ProductsApiActions.GET_CART_PRODUCTS });
        let setTimeOutId = setTimeout(() => {
          if (isUserLoggedIn) {
            productsApiDispatch({
              type: ProductsApiActions.GET_WISHLIST_PRODUCTS,
            });
          }
        });
        clearTimeout(setTimeOutId);
      }
    });
    clearTimeout(setTimeOutId);
  }, []);

  return (
    <ProductContext.Provider
      value={{ productState, isLoading, error, productsDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};
