import React from "react";
import mensKurta from "../../assets/kurta.png";
import { Rating, Price } from "../ui";
import { Link } from "react-router-dom";
import { useCartAndWishlist } from "../../contexts/cart-and-wishlist/cartAndWishlistContext";
export const WishlistItem = ({ itemData }) => {
  const {
    _id,
    make,
    name,
    availableSize,
    imgUrl,
    originalPrice,
    discountedPrice,
    rating,
    totalRatings,
    isWishlisted,
    isAddedToCart,
    isFastDelivery,
    categoryName,
    qty,
  } = itemData;
  const { cartAndWishlistDispatch } = useCartAndWishlist();
  const moveToCartHandler = (e, item) => {
    e.stopPropagation();
    let setTimeoutID = setTimeout(() => {
      cartAndWishlistDispatch({
        type: "DELETE_FROM_WISHLIST",
        payload: item._id,
      });
    }, 0);
    cartAndWishlistDispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    return () => clearTimeout(setTimeoutID);
  };
  const removeFromWishlistHandler = (e, id) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "DELETE_FROM_WISHLIST",
      payload: id,
    });
  };
  return (
    <div
      className="card border-rounded-sm cursor-pointer p-x-md"
      description="Men Solid Cotton Blend Straight Kurta  (Yellow)"
    >
      <button
        className="btn card__wishlist text-gray p-sm"
        onClick={(e) => removeFromWishlistHandler(e, _id)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <div className="card__body m-b-md">
        <div className="card__img-container flex-center">
          <Link to="/products/product-details">
            <img width="180" height="450" src={imgUrl} alt="kurta" />
          </Link>
        </div>
        <p className="text-4 text-gray bold-lg">Raymond</p>
        <p className="text-4 bold-xl text-start">Mens' Kurta</p>
        <Rating rating={{ rating, totalRatings }} />
        <Price price={{ originalPrice, discountedPrice }} />
        {isFastDelivery ? (
          <span className="fast-delivery">
            <i className="fa-solid fa-truck-fast text-5 text-primary">
              &nbsp; Fast Delivery
            </i>
          </span>
        ) : (
          <span className="fast-delivery">
            <i className="fa-solid fa-truck text-5 text-gray">
              &nbsp;Regular Delivery
            </i>
          </span>
        )}
      </div>
      <div className="card__footer text-center gap-sm">
        <button
          className="btn btn-default-outline  border-rounded-md"
          onClick={(e) => moveToCartHandler(e, itemData)}
        >
          Move to Cart
        </button>
      </div>
    </div>
  );
};
