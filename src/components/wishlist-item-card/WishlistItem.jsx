import React from "react";
import { Rating, Price } from "../ui";
import { Link } from "react-router-dom";
import { useCartAndWishlist } from "../../contexts/cart-and-wishlist/cartAndWishlistContext";
import { wishListHandler } from "../../utils/wishListHandler";
import { DeliveryType } from "../delivery-time/DeliveryType";
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
    isFastDelivery,
    categoryName,
    qty,
  } = itemData;
  const { cartAndWishlistDispatch, cartItems } = useCartAndWishlist();
  const { removeFromWishlistHandler, moveToCartHandler } = wishListHandler(
    cartAndWishlistDispatch,
    cartItems,
    _id
  );
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
        <p className="text-4 text-gray bold-lg">{make}</p>
        <p className="text-4 bold-xl text-start">{name}</p>
        <Rating rating={{ rating, totalRatings }} />
        <Price price={{ originalPrice, discountedPrice }} />
        <DeliveryType isFastDelivery={isFastDelivery} />
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
