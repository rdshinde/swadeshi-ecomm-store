import { useState } from "react";
import styles from "./product-details.module.css";
import { Link, useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";

import { Ratings } from "../card-components/Ratings";
import { Price } from "../card-components/Price";
import { DeliveryType } from "../delivery-type/DeliveryType";
import { Product } from "../../contexts/products/ProductsTypesDeclaration";

export const ProductDetails = ({ itemData }: { itemData: Product }) => {
  const navigate = useNavigate();
  const {
    _id,
    imgUrl,
    make,
    description,
    originalPrice,
    discountedPrice,
    rating,
    totalRatings,
    isFastDelivery,
    isWishlisted,
    isAddedToCart,
  } = itemData;

  const [productSize, setProductSize] = useState<string>();
  return (
    <section className={`${styles.product__details_wrapper} border-rounded-sm`}>
      <div className={`${styles.product__img} flex-center`}>
        <img
          src={imgUrl}
          alt="A image to apply the Zoom plugin"
          className="img-zoom"
          height="800px"
        />

        <button
          className={`btn card__wishlist ${
            isWishlisted ? "text-danger" : "text-gray"
          } p-sm`}
          //   onClick={(e) => addToWishListHandler(e, itemData)}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
      <div className={`${styles.product__details}`}>
        <div className="product__name">
          <p className="text-3 bold-lg text-gray">{make}</p>
          <h2>{description}</h2>
        </div>
        <Ratings rating={{ rating, totalRatings }} />
        <div className="m-y-md"></div>
        <Price price={{ originalPrice, discountedPrice }} />
        <DeliveryType isFastDelivery={isFastDelivery} />
        <div className="m-y-md"></div>
        <div className={`${styles.size_chart} gap-md`}>
          <span className="text-3 bold-lg m-r-md">Select Size: </span>
          {["S", "L", "XL", "XXL", "3XL"].map((size) => (
            <button
              className={`btn btn${
                productSize === size ? "-primary" : "-secondary-outline"
              }`}
              //   onClick={() => sizeHandler(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className={`${styles.action_buttons} m-y-lg m-md`}>
          {isWishlisted ? (
            <Link
              className="btn btn-danger-outline  border-rounded-md m-r-md"
              to={"/wishlist"}
            >
              Go to Wishlist
            </Link>
          ) : (
            <button
              className="btn btn-danger-outline m-r-md"
              //   onClick={(e) => addToWishListHandler(e, itemData)}
            >
              Add to Wishlist
            </button>
          )}
          {isAddedToCart ? (
            <Link className="btn btn-danger  border-rounded-md" to={"/cart"}>
              Go to Cart
            </Link>
          ) : (
            <button
              className="btn btn-danger border-rounded-md"
              //   onClick={(e) => AddtoCartHandler(e, itemData, productSize)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
