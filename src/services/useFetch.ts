import { useEffect, useReducer } from "react";
import axios from "axios";

enum apiDataActions {
  SET_LOADING = "SET_LOADING",
  SET_SERVER_RESPONSE = "SET_SERVER_RESPONSE",
  SET_ERROR = "SET_ERROR",
}
type ApiActions = {
  type: apiDataActions;
  payload: any;
};

type ApiDataState = {
  serverResponse: {};
  error: {};
  isLoading: boolean;
};

const initialState: ApiDataState = {
  serverResponse: {},
  error: {},
  isLoading: false,
};

const apiDataReducer = (
  state: ApiDataState,
  action: ApiActions
): ApiDataState => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return { ...state, isLoading: payload };
    case "SET_SERVER_RESPONSE":
      return { ...state, serverResponse: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    default:
      return state;
  }
};

export const useFetch = (
  apiURL: string,
  method: "GET" | "POST" | "DELETE" = "GET",
  postMethodData: {},
  encodedToken: string
) => {
  const [apiDataState, apiDataDispatch] = useReducer(
    apiDataReducer,
    initialState
  );
  let serverResponse: {};

  const getData = async (): Promise<any> => {
    try {
      apiDataDispatch({ type: apiDataActions.SET_LOADING, payload: true });
      switch (method) {
        case "GET":
          serverResponse = await axios.get(apiURL, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        case "POST":
          serverResponse = await axios.post(apiURL, postMethodData, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        case "DELETE":
          serverResponse = await axios.delete(apiURL, {
            headers: {
              authorization: encodedToken,
            },
          });
          break;
        default:
          break;
      }
      apiDataDispatch({
        type: apiDataActions.SET_SERVER_RESPONSE,
        payload: serverResponse,
      });
    } catch (error: any) {
      apiDataDispatch({
        type: apiDataActions.SET_ERROR,
        payload: {
          message: error.response.message,
          status: error.response.status,
        },
      });
    } finally {
      apiDataDispatch({ type: apiDataActions.SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    if (apiURL) {
      getData();
    }
  }, [apiURL, postMethodData, method]);

  return {
    serverResponse: apiDataState.serverResponse,
    error: apiDataState.error,
    isLoading: apiDataState.isLoading,
  };
};
