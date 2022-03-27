const priceSort = (products, sortBy) => {
  const productList = [...products];
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return productList.sort(
      (a, b) => b["discountedPrice"] - a["discountedPrice"]
    );
  } else if (sortBy && sortBy === "LOW_TO_HIGH") {
    return productList.sort(
      (a, b) => a["discountedPrice"] - b["discountedPrice"]
    );
  } else if (sortBy && sortBy === "POPULAR_PRODUCTS") {
    return productList
      .filter(({ rating }) => rating >= 4)
      .sort((a, b) => b["rating"] - a["rating"]);
  } else {
    return [...productList];
  }
};

export { priceSort };
