export const addToHandler = (
  isUserLoggedIn,
  cartAndWishlistDispatch,
  navigate,
  isItemWishlisted
) => {
  const AddtoCartHandler = (e, item) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      cartAndWishlistDispatch({
        type: "ADD_TO_CART",
        payload: { ...item },
      });
    } else {
      navigate("/login");
    }
  };
  const addToWishListHandler = (e, item) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      if (isItemWishlisted(item._id)) {
        cartAndWishlistDispatch({
          type: "DELETE_FROM_WISHLIST",
          payload: item._id,
        });
      } else {
        cartAndWishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: item,
        });
      }
    } else {
      navigate("/login");
    }
  };
  return { addToWishListHandler, AddtoCartHandler };
};
