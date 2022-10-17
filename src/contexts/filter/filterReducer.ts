import { Product } from "../products/ProductsTypesDeclaration";
import {
  FilterActions,
  FilterActionsType,
  FilterStateType,
} from "./filterTypesDeclaration";

export const filterReducer = (
  state: FilterStateType,
  action: FilterActionsType
): FilterStateType => {
  const { type, payload } = action;
  switch (type) {
    case FilterActions.SEARCH_PRODUCTS:
      return {
        ...state,
        searchValue: payload,
      };
    case FilterActions.OUT_OF_STOCK:
      return {
        ...state,
        showOutOfStock: !state.showOutOfStock,
      };
    case FilterActions.FAST_DELIVERY:
      return {
        ...state,
        showFastDelivery: !state.showFastDelivery,
      };
    case FilterActions.CLEAR_DELIVERY_FILTER:
      return {
        ...state,
        showFastDelivery: false,
        showOutOfStock: false,
      };
    case FilterActions.SET_RATING_FILTER:
      return {
        ...state,
        ratings: payload,
      };
    case FilterActions.CLEAR_RATING_FILTER:
      return {
        ...state,
        ratings: null,
      };
    case FilterActions.SET_CATEGORY_FILTER:
      return {
        ...state,
        category: payload,
      };
    case FilterActions.CLEAR_CATEGORY_FILTER:
      return {
        ...state,
        category: "",
      };
    case FilterActions.SORT_BY_PRICE_LOW_TO_HIGH:
      return {
        ...state,
        sortBy: "PRICE_LOW_TO_HIGH",
      };
    case FilterActions.SORT_BY_PRICE_HIGH_TO_LOW:
      return {
        ...state,
        sortBy: "PRICE_HIGH_TO_LOW",
      };
    case FilterActions.SORT_POPULAR_PRODUCTS:
      return {
        ...state,
        sortBy: "POPULAR_PRODUCTS",
      };
    case FilterActions.CLEAE_SORT_FILTER:
      return {
        ...state,
        sortBy: "",
      };
    case FilterActions.FILER_BY_PRICE_RANGE:
      return {
        ...state,
        priceValue: payload,
      };
    case FilterActions.CLEAR_PRICE_FILTER:
      return {
        ...state,
        priceValue: null,
      };
    case FilterActions.CLEAR_ALL_FILTERS:
      return {
        ...state,
        showOutOfStock: false,
        showFastDelivery: false,
        searchValue: "",
        category: "",
        ratings: null,
        sortBy: "",
        priceValue: null,
        showAllProducts: false,
      };
  }
};
