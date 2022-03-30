import React from "react";
import "./productDetails.css";
import { Price, Rating } from "..";
import ImageZoom from "react-image-zooom";
import { DeliveryType } from "../delivery-time/DeliveryType";
import { useCartAndWishlist } from "../../contexts/cart-and-wishlist/cartAndWishlistContext";
import { findItemInCartAndWishlist } from "../../utils/findItemInCartAndWishlist";
import { Link } from "react-router-dom";
import { addToHandler } from "../../utils/addToHandler";
import { useAuth } from "../../contexts/auth/authContext";
import { useNavigate } from "react-router-dom";
export const ProductDetails = ({ itemData }) => {
  const navigate = useNavigate();
  const {
    _id,
    imgUrl,
    name,
    make,
    description,
    originalPrice,
    discountedPrice,
    rating,
    totalRatings,
    isAvailable,
    isFastDelivery,
  } = itemData;

  const { userAuthState, userAuthDispatch } = useAuth();
  const { isUserLoggedIn, encodedToken, user } = userAuthState;
  const {
    cartItems,
    wishlistItems,
    cartAndWishlistDispatch,
    cartAndWishlistState,
    isLoaderLoading,
    isErrorOccured,
  } = useCartAndWishlist();

  const { isItemWishlisted, isItemInCart } = findItemInCartAndWishlist(
    wishlistItems,
    cartItems
  );
  const { addToWishListHandler, AddtoCartHandler } = addToHandler(
    isUserLoggedIn,
    cartAndWishlistDispatch,
    navigate,
    isItemWishlisted
  );
  return (
    <section className="product__details-wrapper border-rounded-sm">
      <div className="product__img flex-center">
        <ImageZoom
          src={imgUrl}
          alt="A image to apply the ImageZoom plugin"
          zoom="200"
          className="img-zoom"
          height="800px"
        />
        <button
          className={`btn card__wishlist ${
            isItemWishlisted(_id) ? "text-danger" : "text-gray"
          } p-sm`}
          onClick={(e) => addToWishListHandler(e, itemData)}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
      <div className="product__details">
        <div className="product__name">
          <p className="text-3 bold-lg text-gray">{make}</p>
          <h2>{description}</h2>
        </div>
        <Rating rating={{ rating, totalRatings }} />
        <div className="m-y-md"></div>
        <Price price={{ originalPrice, discountedPrice }} />
        <DeliveryType isFastDelivery={isFastDelivery} />
        <div className="m-y-md"></div>
        <div className="size-chart gap-md">
          <span className="text-3 bold-lg m-r-md">Size Chart: </span>
          {["S", "L", "XL", "XXL", "3XL"].map((size) => (
            <button className="btn btn-secondary-outline">{size}</button>
          ))}
        </div>
        <div className="action-buttons m-y-lg m-md">
          {isItemWishlisted(_id) ? (
            <Link
              className="btn btn-danger-outline  border-rounded-md m-r-md"
              to={"/wishlist"}
            >
              Go to Wishlist
            </Link>
          ) : (
            <button
              className="btn btn-danger-outline m-r-md"
              onClick={(e) => addToWishListHandler(e, itemData)}
            >
              Add to Wishlist
            </button>
          )}
          {isItemInCart(_id) ? (
            <Link className="btn btn-danger  border-rounded-md" to={"/cart"}>
              Go to Cart
            </Link>
          ) : (
            <button
              className="btn btn-danger border-rounded-md"
              onClick={(e) => AddtoCartHandler(e, itemData)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
