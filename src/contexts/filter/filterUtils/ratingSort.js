const ratingSort = (products, ratingFilter) => {
  const productList = [...products];
  if (ratingFilter && ratingFilter === "RATING_MORE_THAN_ONE") {
    return productList
      .filter(({ rating }) => rating >= 1)
      .sort((a, b) => a["rating"] - b["rating"]);
  } else if (ratingFilter && ratingFilter === "RATING_MORE_THAN_TWO") {
    return productList
      .filter(({ rating }) => rating >= 2)
      .sort((a, b) => a["rating"] - b["rating"]);
  } else if (ratingFilter && ratingFilter === "RATING_MORE_THAN_THREE") {
    return productList
      .filter(({ rating }) => rating >= 3)
      .sort((a, b) => a["rating"] - b["rating"]);
  } else if (ratingFilter && ratingFilter === "RATING_MORE_THAN_FOUR") {
    return productList
      .filter(({ rating }) => rating >= 4)
      .sort((a, b) => a["rating"] - b["rating"]);
  } else {
    return [...productList];
  }
};

export { ratingSort };
