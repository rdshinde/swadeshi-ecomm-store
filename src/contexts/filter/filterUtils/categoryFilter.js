const showCategoryMen = (products) => {
  const productList = [...products];
  return productList.filter(({ categoryName }) => categoryName === "men");
};
const showCategoryWomen = (products) => {
  const productList = [...products];
  return productList.filter(({ categoryName }) => categoryName === "women");
};
const showCategoryBoys = (products) => {
  const productList = [...products];
  return productList.filter(({ categoryName }) => categoryName === "boys");
};

const categoryFilter = (productList, category) => {
  if (category && category === "MEN") {
    return showCategoryMen(productList);
  } else if (category && category === "WOMEN") {
    return showCategoryWomen(productList);
  } else if (category && category === "BOYS") {
    return showCategoryBoys(productList);
  } else {
    return [...productList];
  }
};
export { categoryFilter };
