const filterReducer = (state, action) => {
  const { type, payload, value } = action;
  switch (type) {
    case "FILTER":
      if (payload === "OUT_OF_STOCK") {
        return { ...state, showOutOfStock: !state.showOutOfStock };
      } else if (payload === "FAST_DELIVERY") {
        return { ...state, showFastDelivery: !state.showFastDelivery };
      } else {
        return { ...state };
      }
    case "SORT":
      return { ...state, sortBy: payload, priceValue: value && value };
    case "CLEAR_SORT":
      return { ...state, sortBy: "" };
    default:
      return { ...state };
  }
};
export { filterReducer };
