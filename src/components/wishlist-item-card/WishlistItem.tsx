import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts";
import { Product } from "../../contexts/products/ProductsTypesDeclaration";
import { removeFromWishlist } from "../../utils";
import { Price } from "../card-components/Price";
import { Ratings } from "../card-components/Ratings";
import { DeliveryType } from "../delivery-type/DeliveryType";

export const WishlistItem = ({ itemData }: { itemData: Product }) => {
  const {
    _id,
    imgUrl,
    make,
    name,
    originalPrice,
    discountedPrice,
    rating,
    totalRatings,
    isFastDelivery,
  } = itemData;
  const { productsApiDispatch } = useProducts();
  return (
    <div
      className="card border-rounded-sm cursor-pointer p-x-md"
      description-details="Men Solid Cotton Blend Straight Kurta  (Yellow)"
    >
      <button
        className="btn card__wishlist text-gray p-sm"
        onClick={() => removeFromWishlist(_id, productsApiDispatch)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
      <div className="card__body m-b-md">
        <div className="card__img-container flex-center">
          <Link to={`/products/details`} state={{ ...itemData }}>
            <img width="180" height="450" src={imgUrl} alt="kurta" />
          </Link>
        </div>
        <p className="text-4 text-gray bold-lg">{make}</p>
        <p className="text-4 bold-xl text-start">{name}</p>
        <Ratings rating={{ rating, totalRatings }} />
        <Price price={{ originalPrice, discountedPrice }} />
        <DeliveryType isFastDelivery={isFastDelivery} />
      </div>
      <div className="card__footer text-center gap-sm">
        <button
          className="btn btn-default-outline  border-rounded-md"
          //   onClick={(e) => moveToCartHandler(e, itemData)}
        >
          Move to Cart
        </button>
      </div>
    </div>
  );
};
