import { createContext, useContext, useReducer } from "react";
import { useProducts } from "../products/productsContext";
import { filterReducer } from "./FilterReducer";
import {
  priceFilter,
  priceSort,
  ratingSort,
  categoryFilter,
  deliveryFilter,
} from "./filterUtils";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const { productState, isLoaderLoading, isErrorOccured } = useProducts();
  const { productsList } = productState;
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    showOutOfStock: true,
    showFastDelivery: false,
    category: "",
    ratingFilter: "",
    sortBy: "",
    priceValue: null,
    showAll: true,
  });
  const { category, priceValue, sortBy, showOutOfStock, showFastDelivery } =
    filterState;
  let sortedProducts = priceSort(productsList, filterState.sortBy);
  sortedProducts = priceFilter(sortedProducts, sortBy, priceValue);
  sortedProducts = ratingSort(sortedProducts, filterState.ratingFilter);
  sortedProducts = categoryFilter(sortedProducts, category);
  sortedProducts = deliveryFilter(sortedProducts, {
    showOutOfStock,
    showFastDelivery,
  });
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
