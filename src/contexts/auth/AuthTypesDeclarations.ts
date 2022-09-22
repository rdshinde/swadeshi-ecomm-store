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
  apiPostData: {};
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
