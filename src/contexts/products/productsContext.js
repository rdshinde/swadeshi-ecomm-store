import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useAxios } from "../../utils/useAxios";

import { productReducer } from "./productReducer";

const initialProductState = { productsList: [] };

const ProductContext = createContext(initialProductState);

const useProducts = () => useContext(ProductContext);

const ProductsProvider = ({ children }) => {
  const [apiURL, setApiURL] = useState("/api/products");
  const { isLoaderLoading, serverResponse, isErrorOccured } = useAxios(apiURL);
  const productsFromServer = serverResponse.data?.products || [];
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  useEffect(() => {
    productDispatch({
      type: "UPDATE_PRODUCTS_LIST",
      payload: [...productsFromServer],
    });
  }, [serverResponse]);

  
  return (
    <ProductContext.Provider
      value={{
        productState,
        productDispatch,
        isLoaderLoading,
        isErrorOccured,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductsProvider, useProducts };
