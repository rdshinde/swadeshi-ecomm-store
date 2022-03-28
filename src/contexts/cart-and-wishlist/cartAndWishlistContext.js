import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useAuth } from "../auth/authContext";
import { useAxios } from "../../utils/useAxios";
import { cartAndWishlistReducer } from "./cartAndWishlistReducer";

const initialCartAndWishlistState = { cart: [], wishlist: [] };

const CartAndWishlistContext = createContext(initialCartAndWishlistState);

const useCartAndWishlist = () => useContext(CartAndWishlistContext);

const CartAndWishlistProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const {
    userAuthState: { isUserLoggedIn, encodedToken },
  } = useAuth();
  const [cartAndWishlistState, cartAndWishlistDispatch] = useReducer(
    cartAndWishlistReducer,
    {
      apiURL: "",
      apiMethod: "",
      postData: {
        products: {},
      },
    }
  );
  const { apiURL, apiMethod, postData } = cartAndWishlistState;

  const { serverResponse, isLoaderLoading, isErrorOccured } = useAxios(
    apiURL,
    apiMethod,
    postData,
    encodedToken
  );

  useEffect(() => {
    if (serverResponse) {
      if (serverResponse.data?.cart) {
        setCartItems(serverResponse.data?.cart || []);
      } else if (serverResponse.data?.wishlist) {
        setWishlistItems(serverResponse.data?.wishlist || []);
      }
    }
  }, [serverResponse]);

  useEffect(() => {
    let seTimeOutID;
    if (!isUserLoggedIn) {
      cartAndWishlistDispatch({ type: "EMPTY_CART" });
      setCartItems(() => []);
      setWishlistItems(() => []);
    } else {
      cartAndWishlistDispatch({ type: "GET_CART_ITEMS" });
      seTimeOutID = setTimeout(() => {
        cartAndWishlistDispatch({ type: "GET_WISHLIST_ITEMS" });
      }, 0);
    }
    return () => clearTimeout(seTimeOutID);
  }, [isUserLoggedIn]);
  return (
    <CartAndWishlistContext.Provider
      value={{
        cartItems,
        wishlistItems,
        cartAndWishlistDispatch,
        cartAndWishlistState,
        isLoaderLoading,
        isErrorOccured,
        setCartItems,
        setWishlistItems,
      }}
    >
      {children}
    </CartAndWishlistContext.Provider>
  );
};
export { useCartAndWishlist, CartAndWishlistProvider };
