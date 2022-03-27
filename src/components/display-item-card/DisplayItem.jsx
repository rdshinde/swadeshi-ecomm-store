import "./displayItem.css";
import "../../stylesheets/utility.css";
import React from "react";
import mensKurta from "../../assets/kurta.png";
import { Rating, Price } from "../ui";
import { Link } from "react-router-dom";
export const DisplayItem = ({
  data: {
    imgUrl,
    name,
    make,
    description,
    originalPrice,
    discountedPrice,
    rating,
    totalRatings,
    isAvailable,
    isWishlisted,
    isAddedToCart,
    availableSize,
    categoryName,
    isFastDelivery,
  },
}) => {
  return (
    <div
      className={`card display-card border-rounded-sm cursor-pointer p-x-md ${
        !isAvailable && "out-of-stock"
      }`}
      description={description}
    >
      <div className="card__wishlist text-gray p-sm">
        <i className="fa-solid fa-heart"></i>
      </div>
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
            <i class="fa-solid fa-truck-fast text-5 text-primary">
              &nbsp; Fast Delivery
            </i>
          </span>
        ) : (
          <span className="fast-delivery">
            <i class="fa-solid fa-truck text-5 text-gray">
              &nbsp;Regular Delivery
            </i>
          </span>
        )}
      </div>
      <div className="card__footer text-center gap-sm">
        <button className="btn btn-default-outline  border-rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
