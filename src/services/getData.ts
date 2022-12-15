import axios from "axios";
export const getData = (apiRoute: string, authToken: string): any => {
  return axios.get("https://swadeshi-backend.vercel.app" + apiRoute, {
    headers: {
      authorization: authToken,
    },
  });
};
