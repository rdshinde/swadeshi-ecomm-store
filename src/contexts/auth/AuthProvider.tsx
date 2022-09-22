import { authReducer } from "./authReducer";
import {
  useState,
  useContext,
  createContext,
  useEffect,
  useReducer,
} from "react";
import {
  UserAuthState,
  SignupCredentials,
  LoginCredentials,
  ApiData,
  UserAuthStateActions,
} from "./AuthTypesDeclarations";
import { useFetch } from "../../services";
import { useNavigate } from "react-router-dom";
import unsign from "jwt-decode";

const SECRET: any = process.env.REACT_APP_JWT_SECRET;

type Props = {
  children: React.ReactNode;
};

const initialUserAuthState: UserAuthState = {
  isUserLoggedIn: false,
  encodedToken: "",
  user: {},
};

const AuthContext = createContext<UserAuthState | any>(initialUserAuthState);
export const useAuth = (): Object => useContext(AuthContext);

export const AuthProvider = ({ children }: Props): React.ReactNode => {
  const navigate = useNavigate();
  const [userAuthState, userAuthDispatch] = useReducer(
    authReducer,
    initialUserAuthState
  );
  const [apiData, setApiData] = useState<ApiData>({
    apiURL: "",
    method: "",
    apiPostData: {},
    encodedToken: "",
  });
  const { apiURL, method, apiPostData, encodedToken } = apiData;
  const { isLoading, serverResponse, error } = useFetch(
    apiURL,
    method,
    apiPostData,
    encodedToken
  );
  const signupHandler = (signupCredentials: SignupCredentials) => {
    setApiData((prev) => ({
      ...prev,
      apiURL: "/auth/signup",
      method: "POST",
      apiPostData: { ...prev, ...signupCredentials },
    }));
  };
  const loginHandler = (loginCredentials: LoginCredentials) => {
    setApiData((prev) => ({
      ...prev,
      apiURL: "/auth/login",
      method: "POST",
      apiPostData: { ...prev, ...loginCredentials },
    }));
  };

  const logoutHandler = (firstName: string) => {
    userAuthDispatch({ type: UserAuthStateActions.LOGOUT });
    localStorage.removeItem("token");
    navigate(`/`);
  };
  useEffect(() => {
    let setTimeOutId: ReturnType<typeof setTimeout>;
    setTimeOutId = setTimeout(() => {
      const encodedTokenTemp = localStorage.getItem("token");
      if (encodedTokenTemp) {
        const decodedToken: {} = unsign(encodedTokenTemp, SECRET);
        userAuthDispatch({
          type: UserAuthStateActions.LOGIN,
          payload: {
            isUserLoggedIn: true,
            encodedToken: encodedTokenTemp,
            user: { ...decodedToken },
          },
        });

        navigate(`/home`);
      }
    });
    return () => clearTimeout(setTimeOutId);
  }, []);

  useEffect(() => {
    if (serverResponse || error.status) {
      if (serverResponse.status === 200) {
        const {
          data: { ...foundUser },
        } = serverResponse;
        userAuthDispatch({
          type: UserAuthStateActions.LOGIN,
          payload: {
            isUserLoggedIn: true,
            encodedToken: serverResponse.data.encodedToken,
            user: { ...foundUser },
          },
        });
        localStorage.setItem("token", serverResponse.data.encodedToken);

        navigate("/home");
      } else if (serverResponse.status === 201) {
        localStorage.setItem("signup_token", serverResponse.data.encodedToken);

        navigate(`/auth/login`);
      } else if (serverResponse.status === 422) {
        console.log("User Already Registered.", error.message);
      } else if (serverResponse.status === 404) {
        console.log("Invalid Access", error.message);
      } else if (serverResponse.status === 401) {
        console.log("Password not matched", error.message);
      } else {
        console.log("Something went wrong.", error.message);
      }
    }
  }, [serverResponse, error]);
  return (
    <AuthContext.Provider
      value={{
        userAuthState,
        userAuthDispatch,
        isLoading,
        serverResponse,
        signupHandler,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
