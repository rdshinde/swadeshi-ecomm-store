import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./display-item.module.css";
import { Price, Ratings } from "../index";

type Item = {
  _id: number;
  make: string;
  name: string;
  imgUrl: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  isAvailable: boolean;
  isFastDelivery: boolean;
  isItemWishlisted: boolean;
  isItemInCart: boolean;
  rating: string;
  totalRatings: number;
  qty: number;
  selectedSize: string;
};
export const DisplayItem = ({ itemData }: { itemData: Item }) => {
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
    isItemInCart,
    isItemWishlisted,
  } = itemData;
  return (
    <div
      className={`card ${
        styles.display_card
      } border-rounded-sm cursor-pointer p-x-md ${
        !isAvailable && "out-of-stock"
      }`}
      description-details={description}
    >
      <button
        className={`btn ${styles.card__wishlist} ${
          isItemWishlisted ? "text-danger" : "text-gray"
        } p-sm`}
        // onClick={(e) => addToWishListHandler(e, itemData)}
      >
        <i className="fa-solid fa-heart"></i>
      </button>
      <div className={`${styles.card__body} m-b-md`}>
        <div className={`${styles.card__img_container} flex-center`}>
          <Link to={`/products/details`} state={{ ...itemData }}>
            <img width="180" height="420" src={imgUrl} alt="kurta" />
          </Link>
        </div>
        <p className="text-4 text-gray bold-lg">{make}</p>
        <p className="text-4 bold-xl text-start">{name}</p>
        <Ratings rating={{ rating, totalRatings }} />
        <Price price={{ originalPrice, discountedPrice }} />
        {isFastDelivery ? (
          <span className={`${styles.fast_delivery}`}>
            <i className="fa-solid fa-truck-fast text-5 text-primary">
              &nbsp; Fast Delivery
            </i>
          </span>
        ) : (
          <span className={`${styles.fast_delivery}`}>
            <i className="fa-solid fa-truck text-5 text-gray">
              &nbsp;Regular Delivery
            </i>
          </span>
        )}
      </div>
      <div className={`${styles.card__footer} text-center gap-sm`}>
        {isItemInCart ? (
          <Link
            className="btn btn-default-outline  border-rounded-md"
            to={"/cart"}
          >
            Go to Cart
          </Link>
        ) : (
          <button
            className="btn btn-default-outline  border-rounded-md"
            // onClick={(e) => AddtoCartHandler(e, itemData)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};