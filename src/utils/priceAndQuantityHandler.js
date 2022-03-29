export const priceAndQuantityHandler = () => {
  const getTotalPrice = (cartItems) => {
    return cartItems.reduce((acc, curr) => {
      return (acc = acc + Number(curr.originalPrice));
    }, 0);
  };
  const getDiscountedPrice = (cartItems) => {
    return cartItems.reduce((acc, curr) => {
      return (acc = acc + Number(curr.discountedPrice));
    }, 0);
  };
  const getTotalQuantity = (cartItems) => {
    return cartItems.reduce((acc, curr) => {
      return (acc = acc + Number(curr.qty));
    }, 0);
  };
  return { getTotalQuantity, getTotalPrice, getDiscountedPrice };
};
