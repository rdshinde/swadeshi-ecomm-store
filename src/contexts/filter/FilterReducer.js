const filterReducer = (state, action) => {
  const { type, payload, value } = action;
  switch (type) {
    case "FILTER":
      if (payload === "OUT_OF_STOCK") {
        return {
          ...state,
          showOutOfStock: !state.showOutOfStock,
        };
      } else if (payload === "FAST_DELIVERY") {
        return {
          ...state,
          showFastDelivery: !state.showFastDelivery,
        };
      } else if (payload === "RATING_MORE_THAN_ONE") {
        return {
          ...state,
          ratingFilter: payload,
        };
      } else if (payload === "RATING_MORE_THAN_TWO") {
        return {
          ...state,
          ratingFilter: payload,
        };
      } else if (payload === "RATING_MORE_THAN_THREE") {
        return {
          ...state,
          ratingFilter: payload,
        };
      } else if (payload === "RATING_MORE_THAN_FOUR") {
        return {
          ...state,
          ratingFilter: payload,
        };
      } else if (payload === "CLEAR_RATING_FILTER") {
        return {
          ...state,
          ratingFilter: "",
        };
      } else if (payload === "SHOW_MEN") {
        return {
          ...state,
          category: "MEN",
        };
      } else if (payload === "SHOW_WOMEN") {
        return {
          ...state,
          category: "WOMEN",
        };
      } else if (payload === "SHOW_BOYS") {
        return {
          ...state,
          category: "BOYS",
        };
      } else if (payload === "CLEAR_CATEGORY") {
        return {
          ...state,
          category: "",
        };
      } else if (payload === "OUT_OF_STOCK") {
        return {
          ...state,
          showOutOfStock: !state.showOutOfStock,
        };
      } else if (payload === "FAST_DELIVERY") {
        return {
          ...state,
          showFastDelivery: !state.showFastDelivery,
        };
      } else if (payload === "CLEAR_ALL_FILTERS") {
        return {
          ...state,
          showFastDelivery: false,
          showOutOfStock: false,
          category: "",
          ratingFilter: "",
          sortBy: "",
          priceValue: 100,
          showAll: true,
        };
      } else if (payload === "CLEAR_PRICE_FILTER") {
        return {
          ...state,
          sortBy: "",
          priceValue: 100,
        };
      } else if (payload === "CLEAR_DELIVERY_FILTER") {
        return {
          ...state,
          showFastDelivery: false,
          showOutOfStock: false,
        };
      } else {
        return {
          ...state,
        };
      }
    case "SORT":
      return {
        ...state,
        sortBy: payload,
        priceValue: value && value,
      };
    case "CLEAR_SORT":
      return {
        ...state,
        sortBy: "",
      };
    default:
      return {
        ...state,
      };
  }
};
export { filterReducer };
