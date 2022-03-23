const UPDATE_PRODUCTS_LIST = "UPDATE_PRODUCTS_LIST";

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCTS_LIST:
      return { ...state, productsList: [...payload] };
    default:
      return { ...state };
  }
};
export { productReducer };
