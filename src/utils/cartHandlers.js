import { Toast } from "./toast";
const cartHandlers = (cartAndWishlistDispatch) => {
  const cartItemDeleteHandler = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
    Toast({ type: "success", msg: `Item removed from cart.` });
  };
  const incrementItemQuantity = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "UPDATE_CART_ITEM_QUANTITY",
      payload: {
        action: "increment",
        id: id,
      },
    });
  };
  const decrementItemQuantity = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "UPDATE_CART_ITEM_QUANTITY",
      payload: {
        action: "decrement",
        id: id,
      },
    });
  };
  const moveToWishlistHandler = (e, item) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "REMOVE_FROM_CART",
      payload: item._id,
    });
    let setTimeoutID;
    setTimeoutID = setTimeout(() => {
      cartAndWishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: item,
      });
    }, 0);
    Toast({ type: "success", msg: `${item.name} moved to wishlist.` });
    return () => clearTimeout(setTimeoutID);
  };
  return {
    decrementItemQuantity,
    incrementItemQuantity,
    cartItemDeleteHandler,
    moveToWishlistHandler,
  };
};
export { cartHandlers };
