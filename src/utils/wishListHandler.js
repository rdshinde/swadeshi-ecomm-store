export const wishListHandler = (cartAndWishlistDispatch, cartItems, _id) => {
  const moveToCartHandler = (e, item) => {
    e.stopPropagation();
    let setTimeoutID = setTimeout(() => {
      cartAndWishlistDispatch({
        type: "DELETE_FROM_WISHLIST",
        payload: item._id,
      });
    }, 0);
    if (cartItems.find((cartItem) => cartItem._id === item._id)) {
      cartAndWishlistDispatch({
        type: "UPDATE_CART_ITEM_QUANTITY",
        payload: {
          action: "increment",
          id: _id,
        },
      });
    } else {
      cartAndWishlistDispatch({
        type: "ADD_TO_CART",
        payload: item,
      });
    }

    return () => clearTimeout(setTimeoutID);
  };
  const removeFromWishlistHandler = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "DELETE_FROM_WISHLIST",
      payload: id,
    });
  };
  return { removeFromWishlistHandler, moveToCartHandler };
};
