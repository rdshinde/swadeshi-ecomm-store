import { Toast } from "./toast";
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
      Toast({ type: "success", msg: `${item.name} added to cart.` });
    } else {
      navigate("/login");
      Toast({ type: "error", msg: "Please login to use Cart functionality." });
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
        Toast({ type: "success", msg: `${item.name} added to wishlist.` });
      }
    } else {
      navigate("/login");
      Toast({
        type: "error",
        msg: "Please login to use Wishlist functionality.",
      });
    }
  };
  return { addToWishListHandler, AddtoCartHandler };
};
