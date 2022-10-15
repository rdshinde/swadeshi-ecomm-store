import React from "react";
import { Link } from "react-router-dom";

import styles from "./cart-item.module.css";
import { Ratings, Price } from "../index";
import { Product } from "../../contexts/products/ProductsTypesDeclaration";
import { useProducts } from "../../contexts";
import { removeFromCart } from "../../utils";

export const CartItem = ({ itemData }: { itemData: Product }) => {
  const {
    _id,
    make,
    name,
    imgUrl,
    originalPrice,
    discountedPrice,
    rating,
    totalRatings,
    quantitiesInCart,
    // selectedSize,
  } = itemData;
  const { productsApiDispatch } = useProducts();
  return (
    <section className={`${styles.cart__item} border-rounded-sm`}>
      <div className={`${styles.cart__item_info} flex-center`}>
        <div className={`${styles.item__img}`}>
          <Link to={`/products/details`} state={{ ...itemData }}>
            <img src={imgUrl} height="180px" alt={name} />
          </Link>
        </div>
        <div className={`${styles.item__description} m-x-lg`}>
          <p className="text-4 text-gray bold-lg">{make}</p>
          <p className="text-4 bold-xl p-y-sm">{name}</p>
          <p className="text-4 bold-lg p-b-sm">Size: {"XL"}</p>
          <Ratings rating={{ rating, totalRatings }} />
          <Price price={{ originalPrice, discountedPrice }} />
          <button
            className="btn btn-secondary m-y-md"
            // onClick={(e) => moveToWishlistHandler(e, itemData)}
          >
            Move To WishList
          </button>
        </div>
      </div>
      <div className={`${styles.cart__item_actions} flex-center`}>
        <div className={`${styles.item__count}`}>
          <button
            className={`count__delete bg-secondary btn border-rounded-lg ${
              quantitiesInCart <= 1 && "btn-disabled"
            }`}
            // onClick={(e) => decrementItemQuantity(e, _id)}
            disabled={quantitiesInCart <= 1}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="count p-sm text-4 bold-lg">{quantitiesInCart}</div>
          <button
            className={`count__add bg-secondary btn border-rounded-lg `}
            // onClick={(e) => incrementItemQuantity(e, _id)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="item__price text-3 bold-lg m-x-xxl">
          {/* &#8377;{quantitiesInCart * discountedPrice} */}
        </div>
        <button
          className="item__delete flex-center btn m-r-lg"
          //   onClick={(e) => cartItemDeleteHandler(e, _id)}
          onClick={() => removeFromCart(_id, productsApiDispatch)}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
    </section>
  );
};
