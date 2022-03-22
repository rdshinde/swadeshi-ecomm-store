import axios from "axios";

import { useEffect, useState } from "react";

export const useAxios = (apiURL, method = "GET", postMethodData) => {
  const [isLoaderLoading, setLoadingState] = useState(false);
  const [serverResponse, setServerResponse] = useState({});
  const [isErrorOccured, seErrorState] = useState(null);

  const getData = async () => {
    try {
      setLoadingState(true);
      let serverResponse;
      switch (method) {
        case "GET":
          serverResponse = await axios.get(apiURL);
          break;
        case "POST":
          serverResponse = await axios.post(apiURL, postMethodData);
          break;
        default:
          break;
      }
      setServerResponse(serverResponse);
    } catch (error) {
      seErrorState(true);
      console.log(error);
    } finally {
      setLoadingState(false);
    }
  };
  useEffect(() => {
    getData();
  }, [apiURL]);
  return {
    isLoaderLoading,
    serverResponse,
    isErrorOccured,
  };
};
