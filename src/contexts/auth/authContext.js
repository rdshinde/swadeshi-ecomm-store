import { createContext, useContext, useReducer } from "react";
import { authReducer } from "./authReducer";
const initialUserAuthState = {
  userAuthState: {
    isUserLoggedIn: false,
    encodedToken: "",
    user: {
      userCartItems: [],
      userWishlistItems: [],
      userAddress: [],
    },
  },
};

const AuthContext = createContext(initialUserAuthState);

const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [userAuthState, userAuthDispatch] = useReducer(
    authReducer,
    initialUserAuthState
  );
  return (
    <AuthContext.Provider value={{ userAuthState, userAuthDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
