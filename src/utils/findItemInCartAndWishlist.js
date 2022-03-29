export const findItemInCartAndWishlist = (wishlistItems, cartItems) => {
  const isItemWishlisted = (_id) => {
    return wishlistItems.find((item) => item._id === _id);
  };
  const isItemInCart = (_id) => {
    return cartItems.find((item) => item._id === _id);
  };
  return { isItemWishlisted, isItemInCart };
};
