import { createContext, useContext, useReducer } from "react";
import { useProducts } from "../products/productsContext";
import { filterReducer } from "./FilterReducer";
import { priceSort, ratingSort } from "./filterUtils";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const { productState, isLoaderLoading, isErrorOccured } = useProducts();
  const { productsList } = productState;
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    showOutOfStock: false,
    showFastDelivery: false,
    ratingFilter: "",
    sortBy: "",
    priceValue: null,
    showAll: true,
  });
  //   console.log(filterState);
  let sortedProducts = priceSort(productsList, filterState.sortBy);
  sortedProducts = ratingSort(sortedProducts, filterState.ratingFilter);
  //   console.log(sortedProducts);
  return (
    <FilterContext.Provider
      value={{
        filterState,
        filterDispatch,
        sortedProducts,
        isLoaderLoading,
        isErrorOccured,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
