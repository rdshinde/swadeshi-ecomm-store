import "./cartItem.css";
import React from "react";
import { Rating, Price } from "../ui";
import { Link } from "react-router-dom";
import { useCartAndWishlist } from "../../contexts/cart-and-wishlist/cartAndWishlistContext";
import { Loader } from "../loader/Loader";
import { cartHandlers } from "../../utils/cartHandlers";
export const CartItem = ({ itemData }) => {
  const {
    _id,
    make,
    name,
    imgUrl,
    originalPrice,
    discountedPrice,
    rating,
    totalRatings,
    isFastDelivery,
    categoryName,
    qty,
    selectedSize,
  } = itemData;
  const { isLoaderLoading, cartAndWishlistDispatch } = useCartAndWishlist();
  const {
    decrementItemQuantity,
    incrementItemQuantity,
    cartItemDeleteHandler,
    moveToWishlistHandler,
  } = cartHandlers(cartAndWishlistDispatch);

  return (
    <section className="cart__item border-rounded-sm">
      {isLoaderLoading && <Loader />}
      <div className="cart__item-info flex-center">
        <div className="item__img">
          <Link to={`/products/details`} state={{ ...itemData }}>
            <img src={imgUrl} height="180px" alt={name} />
          </Link>
        </div>
        <div className="item__description m-x-lg">
          <p className="text-4 text-gray bold-lg">{make}</p>
          <p className="text-4 bold-xl p-y-sm">{name}</p>
          <p className="text-4 bold-lg p-b-sm">Size: {selectedSize}</p>
          <Rating rating={{ rating, totalRatings }} />
          <Price price={{ originalPrice, discountedPrice }} />
          <button
            className="btn btn-secondary m-y-md"
            onClick={(e) => moveToWishlistHandler(e, itemData)}
          >
            Move To WishList
          </button>
        </div>
      </div>
      <div className="cart__item-actions flex-center">
        <div className="item__count">
          <button
            className={`count__delete bg-secondary btn border-rounded-lg ${
              qty <= 1 && "btn-disabled"
            }`}
            onClick={(e) => decrementItemQuantity(e, _id)}
            disabled={qty <= 1}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="count p-sm text-4 bold-lg">{qty}</div>
          <button
            className={`count__add bg-secondary btn border-rounded-lg `}
            onClick={(e) => incrementItemQuantity(e, _id)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="item__price text-3 bold-lg m-x-xxl">
          &#8377;{qty * discountedPrice}
        </div>
        <button
          className="item__delete flex-center btn m-r-lg"
          onClick={(e) => cartItemDeleteHandler(e, _id)}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
    </section>
  );
};
