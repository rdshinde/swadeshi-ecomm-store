import "./displayItem.css";
import "../../stylesheets/utility.css";
import React from "react";
import { useAuth } from "../../contexts/auth/authContext";
import { useNavigate } from "react-router-dom";
import { Rating, Price } from "../ui";
import { Link } from "react-router-dom";
import { useCartAndWishlist } from "../../contexts/cart-and-wishlist/cartAndWishlistContext";
export const DisplayItem = ({ itemData }) => {
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
    // isWishlisted,
    // isAddedToCart,
    // availableSize,
    // categoryName,
    isFastDelivery,
  } = itemData;
  const navigate = useNavigate();
  // navigate("/");
  const { userAuthState, userAuthDispatch } = useAuth();
  const { isUserLoggedIn, encodedToken, user } = userAuthState;
  // const { cart, wishlist } = user;
  const {
    cartItems,
    wishlistItems,
    cartAndWishlistDispatch,
    cartAndWishlistState,
    isLoaderLoading,
    isErrorOccured,
  } = useCartAndWishlist();
  const AddtoCartHandler = (e, item) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };
  const addToWishListHandler = (e, item) => {
    e.stopPropagation();
    cartAndWishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: item,
    });
  };
  const isItemWishlisted = (_id) => {
    return;
  };
  return (
    <div
      className={`card display-card border-rounded-sm cursor-pointer p-x-md ${
        !isAvailable && "out-of-stock"
      }`}
      description={description}
    >
      <button
        className={`btn card__wishlist ${
          isItemWishlisted ? "text-danger" : "text-gray"
        } p-sm`}
        onClick={(e) => addToWishListHandler(e, itemData)}
      >
        <i className="fa-solid fa-heart"></i>
      </button>
      <div className="card__body m-b-md">
        <div className="card__img-container flex-center">
          <Link to="/products/product-details">
            <img width="180" height="420" src={imgUrl} alt="kurta" />
          </Link>
        </div>
        <p className="text-4 text-gray bold-lg">{make}</p>
        <p className="text-4 bold-xl text-start">{name}</p>
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
          onClick={(e) => AddtoCartHandler(e, itemData)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
