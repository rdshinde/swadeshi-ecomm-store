import { authReducer } from "./authReducer";
import { Toast } from "../../utils";
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
  UseAuth,
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
export const useAuth = (): UseAuth => useContext(AuthContext);

export const AuthProvider = ({ children }: Props): JSX.Element => {
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
      apiPostData: { ...signupCredentials },
    }));
  };
  const loginHandler = (loginCredentials: LoginCredentials) => {
    setApiData((prev) => ({
      ...prev,
      apiURL: "/auth/login",
      method: "POST",
      apiPostData: { ...loginCredentials },
    }));
  };
  const logoutHandler = () => {
    userAuthDispatch({ type: UserAuthStateActions.LOGOUT });
    localStorage.removeItem("token");
    navigate(`/`);
    Toast({
      type: "success",
      message: `Logged out successfully.`,
    });
  };
  useEffect(() => {
    let setTimeOutId: ReturnType<typeof setTimeout>;
    setTimeOutId = setTimeout(() => {
      const encodedTokenTemp = localStorage.getItem("token");
      if (encodedTokenTemp) {
        const decodedToken: any = unsign(encodedTokenTemp, SECRET);
        userAuthDispatch({
          type: UserAuthStateActions.LOGIN,
          payload: {
            isUserLoggedIn: true,
            encodedToken: encodedTokenTemp,
            user: { ...decodedToken },
          },
        });

        navigate(`/`);
        Toast({
          type: "success",
          message: `Logged in as ${decodedToken[0].firstName}`,
        });
        navigate("/");
      }
    });
    return () => clearTimeout(setTimeOutId);
  }, []);

  useEffect(() => {
    if (serverResponse || error.status) {
      if (serverResponse.status === 200) {
        const token: string = serverResponse.data.encodedToken;
        const decodedToken: any = unsign(token, SECRET);

        userAuthDispatch({
          type: UserAuthStateActions.LOGIN,
          payload: {
            isUserLoggedIn: true,
            encodedToken: serverResponse.data.encodedToken,
            user: { ...decodedToken },
          },
        });
        localStorage.setItem("token", serverResponse.data.encodedToken);
        Toast({
          type: "success",
          message: `Logged in as ${decodedToken[0].firstName}`,
        });
        navigate("/");
      } else if (serverResponse.status === 201) {
        localStorage.setItem("signup_token", serverResponse.data.encodedToken);
        Toast({
          type: "success",
          message: `${serverResponse.data.savedUser.firstName} resgistered successfully!`,
        });
        navigate(`/login`);
      } else if (serverResponse.status === 422) {
        Toast({ type: "error", message: `${error.message}` });
      } else if (serverResponse.status === 404) {
        Toast({ type: "error", message: `${error.message}` });
      } else if (serverResponse.status === 401) {
        Toast({ type: "error", message: `${error.message}` });
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
