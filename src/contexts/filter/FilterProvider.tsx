import { createContext, useContext, useReducer } from "react";
import {
  searchProducts,
  showOutOfStockProducts,
  getFastDeliveryProducts,
  getSortedByCategoryProducts,
  getFilteredByRatingProducts,
  getfilteredByPrice,
  getSortedProducts,
} from "../../utils";
import { useProducts } from "../products/ProductsProvider";
import { filterReducer } from "./filterReducer";
import { FilterStateType, Props } from "./filterTypesDeclaration";

const initialFilterState: FilterStateType = {
  searchValue: "",
  showOutOfStock: false,
  showFastDelivery: true,
  category: "",
  ratings: null,
  sortBy: "",
  priceValue: null,
  showAllProducts: false,
};

const FilterContext = createContext<FilterStateType | any>(initialFilterState);

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: Props): JSX.Element => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );
  const {
    productState: { allProducts },
  } = useProducts();
  const searchedProducts = searchProducts(filterState.searchValue, allProducts);
  const outOfStockProducts = showOutOfStockProducts(
    filterState.showOutOfStock,
    searchedProducts
  );
  const fastDeliveryProducts = getFastDeliveryProducts(
    filterState.showFastDelivery,
    outOfStockProducts
  );
  const sortedByCategory = getSortedByCategoryProducts(
    filterState.category,
    fastDeliveryProducts
  );
  const filteredByRatings = getFilteredByRatingProducts(
    filterState.ratings,
    sortedByCategory
  );
  const filteredByPrice = getfilteredByPrice(
    filterState.priceValue,
    filteredByRatings
  );
  const sortedProducts = getSortedProducts(filterState.sortBy, filteredByPrice);

  return (
    <FilterContext.Provider
      value={{
        filterState,
        filterDispatch,
        sortedProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
