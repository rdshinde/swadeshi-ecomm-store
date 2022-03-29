import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useCartAndWishlist } from "../cart-and-wishlist/cartAndWishlistContext";
import { authReducer } from "./authReducer";
const initialUserAuthState = {
  userAuthState: {
    isUserLoggedIn: false,
    encodedToken: "",
    user: {},
  },
};
const defaultUser = {
  _id: uuid(),
  firstName: "rishikesh",
  lastName: "shinde",
  email: "ab@mail.com",
  password: "rd",
};
const AuthContext = createContext(initialUserAuthState);

const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [userAuthState, userAuthDispatch] = useReducer(
    authReducer,
    initialUserAuthState
  );
  useEffect(() => {
    let setTimeOutId;
    setTimeOutId = setTimeout(() => {
      const encodedTokenTemp = localStorage.getItem("token");
      if (encodedTokenTemp) {
        userAuthDispatch({
          type: "LOGIN",
          payload: {
            isUserLoggedIn: true,
            encodedToken: encodedTokenTemp,
            user: { ...defaultUser },
          },
        });
      }
    });
    return () => clearTimeout(setTimeOutId);
  }, []);
  const { setCartItems, setWishlistItems } = useCartAndWishlist;
  useEffect(() => {
    console.log('getItems')
    let setTimeOutID;
    setTimeOutID = setTimeout(() => {
      setWishlistItems(localStorage.getItem(JSON.parse("wishlistItems")));
      setCartItems(localStorage.getItem(JSON.parse("cartItems")));
    });
    return clearTimeout(setTimeOutID);
  }, []);
  return (
    <AuthContext.Provider value={{ userAuthState, userAuthDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
