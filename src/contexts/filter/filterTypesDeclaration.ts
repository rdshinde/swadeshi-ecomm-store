export enum FilterActions {
  SEARCH_PRODUCTS = "SEARCH_PRODUCTS",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  FAST_DELIVERY = "FAST_DELIVERY",
  CLEAR_DELIVERY_FILTER = "CLEAR_DELIVERY_FILTER",
  SET_RATING_FILTER = "SET_RATING_FILTER",
  CLEAR_RATING_FILTER = "CLEAR_RATING_FILTER",
  SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER",
  CLEAR_CATEGORY_FILTER = "CLEAR_CATEGORY_FILTER",
  SORT_BY_PRICE_LOW_TO_HIGH = "SORT_BY_PRICE_LOW_TO_HIGH",
  SORT_BY_PRICE_HIGH_TO_LOW = "SORT_BY_PRICE_HIGH_TO_LOW",
  SORT_POPULAR_PRODUCTS = "SORT_POPULAR_PRODUCTS",
  CLEAE_SORT_FILTER = "CLEAE_SORT_FILTER",
  FILER_BY_PRICE_RANGE = "FILER_BY_PRICE_RANGE",
  CLEAR_PRICE_FILTER = "CLEAR_PRICE_FILTER",
  CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS",
}

export type FilterActionsType = {
  type: FilterActions;
  payload?: any;
};

export type FilterStateType = {
  showOutOfStock: boolean;
  showFastDelivery: boolean;
  ratings: 1 | 2 | 3 | 4 | null;
  searchValue: string;
  sortBy: "PRICE_LOW_TO_HIGH" | "PRICE_HIGH_TO_LOW" | "POPULAR_PRODUCTS" | "";
  category: "MEN" | "WOMEN" | "KIDS" | "";
  priceValue: number | null;
  showAllProducts: boolean;
};
export type Props = {
  children: React.ReactNode;
};
