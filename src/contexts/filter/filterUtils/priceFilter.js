const priceFilter = (products, sortBy, priceValue) => {

  const productList = [...products];
  if (sortBy && sortBy === "PRICE_SLIDER") {
    return productList
      .filter(({ discountedPrice }) => discountedPrice <= priceValue)
      .sort((a, b) => b["discountedPrice"] - a["discountedPrice"]);
  } else {
    return [...productList];
  }
};

export { priceFilter };
