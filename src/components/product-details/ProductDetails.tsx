import { useEffect, useState } from "react";
import styles from "./product-details.module.css";
import { Link, useNavigate } from "react-router-dom";
import Zoom from "react-medium-image-zoom";

import { Ratings } from "../card-components/Ratings";
import { Price } from "../card-components/Price";
import { DeliveryType } from "../delivery-type/DeliveryType";
import { Product } from "../../contexts/products/ProductsTypesDeclaration";
import { useProducts } from "../../contexts";
import { addToCart, addToWishlist } from "../../utils";
import { Loader } from "../loader/Loader";

export const ProductDetails = ({ itemData }: { itemData: Product | any }) => {
  const originalPrice = itemData?.originalPrice || 0;
  const discountedPrice = itemData?.discountedPrice || 0;
  const rating = itemData?.rating || 0;
  const totalRatings = itemData?.totalRatings || 0;
  const isFastDelivery = itemData?.isFastDelivery || false;

  const [productSize, setProductSize] = useState<string>();
  const { productState, productsApiDispatch } = useProducts();

  return (
    <section className={`${styles.product__details_wrapper} border-rounded-sm`}>
      <div className={`${styles.product__img} flex-center`}>
        <img
          src={itemData?.imgUrl}
          alt="A image to apply the Zoom plugin"
          className="img-zoom"
          height="800px"
        />

        <button
          className={`btn ${styles.card__wishlist}  ${
            itemData?.isWishlisted ? "text-danger" : "text-gray"
          } p-sm`}
          onClick={() =>
            addToWishlist(
              itemData,
              productsApiDispatch,
              productState.wishlist.products
            )
          }
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
      <div className={`${styles.product__details}`}>
        <div className="product__name">
          <p className="text-3 bold-lg text-gray">{itemData?.make}</p>
          <h2>{itemData?.description}</h2>
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
          {itemData?.isWishlisted ? (
            <Link
              className="btn btn-danger-outline  border-rounded-md m-r-md"
              to={"/wishlist"}
            >
              Go to Wishlist
            </Link>
          ) : (
            <button
              className="btn btn-danger-outline m-r-md"
              onClick={() =>
                addToWishlist(
                  itemData,
                  productsApiDispatch,
                  productState.wishlist.products
                )
              }
            >
              Add to Wishlist
            </button>
          )}
          {itemData?.isAddedToCart ? (
            <Link className="btn btn-danger  border-rounded-md" to={"/cart"}>
              Go to Cart
            </Link>
          ) : (
            <button
              className="btn btn-danger border-rounded-md"
              onClick={() => addToCart(itemData, productsApiDispatch)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
