import axios from "axios";
export const getData = (apiRoute: string, authToken: string): any => {
  return axios.get('https://swadeshi-ecomm.herokuapp.com'+apiRoute, {
    headers: {
      authorization: authToken,
    },
  });
};
