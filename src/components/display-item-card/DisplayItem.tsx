import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./display-item.module.css";
import { Price, Ratings } from "../index";
import {
  Product,
  ProductsApiActions,
} from "../../contexts/products/ProductsTypesDeclaration";
import { useProducts } from "../../contexts";
import { addToCart, addToWishlist } from "../../utils";

export const DisplayItem = ({ itemData }: { itemData: Product }) => {
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
    isAddedToCart,
    isWishlisted,
  } = itemData;
  const { productsApiDispatch } = useProducts();
  console.log(isAddedToCart);
  return (
    <div
      className={`card ${
        styles.display_card
      } border-rounded-sm cursor-pointer p-x-md ${
        !isAvailable && "out-of-stock"
      }`}
      product-details={description}
    >
      <button
        className={`btn ${styles.card__wishlist} ${
          isWishlisted ? "text-danger" : "text-gray"
        } p-sm`}
        onClick={(e) => addToWishlist(itemData, productsApiDispatch)}
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
        {isAddedToCart ? (
          <Link
            className={`${styles.footer_btn} btn btn-default-outline  border-rounded-md`}
            to={"/cart"}
          >
            Go to Cart
          </Link>
        ) : (
          <button
            className={`${styles.footer_btn} btn btn-default-outline  border-rounded-md`}
            onClick={(e) => addToCart(itemData, productsApiDispatch)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
