export type UserAuthState = {
  isUserLoggedIn: boolean;
  encodedToken: string;
  user: Object;
};
export type SignupCredentials = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type LoginCredentials = {
  email: string;
  password: string;
};

export type ApiData = {
  apiURL: string;
  method: "GET" | "POST" | "DELETE" | "";
  apiPostData: any;
  encodedToken: string;
};

export enum UserAuthStateActions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}
export type UserAuthActions = {
  type: UserAuthStateActions;
  payload?: any;
};
export type UseAuth = {
  userAuthState: UserAuthState;
  userAuthDispatch: Function;
  isLoading: boolean;
  serverResponse: any;
  signupHandler: Function;
  loginHandler: Function;
  logoutHandler: Function;
};
