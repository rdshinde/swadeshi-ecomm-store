const deliveryFilter = (
  sortedProducts,
  { showFastDelivery, showOutOfStock }
) => {
  const productList = [...sortedProducts];
  return productList
    .filter(({ isFastDelivery }) => (showFastDelivery ? isFastDelivery : true))
    .filter(({ isAvailable }) => (showOutOfStock ? true : isAvailable));
};
export { deliveryFilter };
