import {
  UserAuthState,
  UserAuthStateActions,
  UserAuthActions,
} from "./AuthTypesDeclarations";



export const authReducer = (state: UserAuthState, action: UserAuthActions) => {
  const { type, payload } = action;
  switch (type) {
    case UserAuthStateActions.LOGIN:
      const { encodedToken, user } = payload;
      return {
        ...state,
        isUserLoggedIn: true,
        encodedToken: encodedToken,
        user: { ...user },
      };
    case UserAuthStateActions.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        encodedToken: "",
        user: {},
      };
  }
};
