import { createContext, useContext, useReducer } from "react";
import { useProducts } from "../products/productsContext";
import { filterReducer } from "./FilterReducer";
import { priceSort, ratingSort } from "./filterUtils";
import { categoryFilter } from "./filterUtils";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const { productState, isLoaderLoading, isErrorOccured } = useProducts();
  const { productsList } = productState;
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    showOutOfStock: false,
    category: "",
    ratingFilter: "",
    sortBy: "",
    priceValue: null,
    showAll: true,
  });
  const { category } = filterState;
  let sortedProducts = priceSort(productsList, filterState.sortBy);
  sortedProducts = ratingSort(sortedProducts, filterState.ratingFilter);
  sortedProducts = categoryFilter(sortedProducts, category);
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
