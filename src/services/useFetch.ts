import { useEffect, useReducer } from "react";
import axios from "axios";

enum ApiDataActions {
  SET_LOADING = "SET_LOADING",
  SET_SERVER_RESPONSE = "SET_SERVER_RESPONSE",
  SET_ERROR = "SET_ERROR",
}
type ApiActions = {
  type: ApiDataActions;
  payload: any;
};

type ApiDataState = {
  serverResponse: {
    status?: number;
    data?: any;
  };
  error: {
    message?: string;
    status?: number;
  };
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
    case ApiDataActions.SET_LOADING:
      return { ...state, isLoading: payload };
    case ApiDataActions.SET_SERVER_RESPONSE:
      return { ...state, serverResponse: payload };
    case ApiDataActions.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export const useFetch = (
  apiURL: string,
  method: "GET" | "POST" | "DELETE" | "" = "GET",
  postMethodData: {},
  encodedToken?: string
) => {
  const [apiDataState, apiDataDispatch] = useReducer(
    apiDataReducer,
    initialState
  );
  let serverResponse: {};
  let token: string;
  if (encodedToken) {
    token = encodedToken;
  }
  const API: string = `https://swadeshi-ecomm.herokuapp.com` + apiURL;
  const getData = async (): Promise<any> => {
    try {
      apiDataDispatch({ type: ApiDataActions.SET_LOADING, payload: true });
      switch (method) {
        case "GET":
          serverResponse = await axios.get(API, {
            headers: {
              authorization: token,
            },
          });
          break;
        case "POST":
          serverResponse = await axios.post(API, postMethodData, {
            headers: {
              authorization: token,
            },
          });
          break;
        case "DELETE":
          serverResponse = await axios.delete(API, {
            headers: {
              authorization: token,
            },
          });
          break;
        default:
          break;
      }
      apiDataDispatch({
        type: ApiDataActions.SET_SERVER_RESPONSE,
        payload: serverResponse,
      });
    } catch (error: any) {
      apiDataDispatch({
        type: ApiDataActions.SET_ERROR,
        payload: {
          message: error.response.message,
          status: error.response.status,
        },
      });
    } finally {
      apiDataDispatch({ type: ApiDataActions.SET_LOADING, payload: false });
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
