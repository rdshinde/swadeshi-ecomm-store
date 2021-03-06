export const priceAndQuantityHandler = () => {
  const getTotalPrice = (cartItems) => {
    if (cartItems) {
      return cartItems.reduce((acc, curr) => {
        return (acc = acc + Number(curr.originalPrice * curr.qty));
      }, 0);
    }
  };
  const getDiscountedPrice = (cartItems) => {
    if (cartItems) {
      return cartItems.reduce((acc, curr) => {
        return (acc = acc + Number(curr.discountedPrice * curr.qty));
      }, 0);
    }
  };
  const getTotalQuantity = (cartItems) => {
    if (cartItems) {
      return cartItems.reduce((acc, curr) => {
        return (acc = acc + Number(curr.qty));
      }, 0);
    }
  };
  return { getTotalQuantity, getTotalPrice, getDiscountedPrice };
};
