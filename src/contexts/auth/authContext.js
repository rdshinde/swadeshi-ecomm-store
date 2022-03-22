import { createContext, useContext, useReducer } from "react";

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
    
  const [useAuthState, userAuthDispatch] = useReducer(
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
