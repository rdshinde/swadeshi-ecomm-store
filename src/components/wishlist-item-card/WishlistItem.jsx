import React from "react";
import mensKurta from "../../assets/kurta.png";
import { Rating, Price } from "../ui";
import { Link } from "react-router-dom";
export const WishlistItem = () => {
  return (
    <div
      className="card border-rounded-sm cursor-pointer p-x-md"
      description="Men Solid Cotton Blend Straight Kurta  (Yellow)"
    >
      <div className="card__wishlist text-gray p-sm">
        <i className="fa-solid fa-trash-can"></i>
      </div>
      <div className="card__body m-b-md">
        <div className="card__img-container flex-center">
          <Link to="/products/product-details">
            <img width="180" height="450" src={mensKurta} alt="kurta" />
          </Link>
        </div>
        <p className="text-4 text-gray bold-lg">Raymond</p>
        <p className="text-4 bold-xl text-start">Mens' Kurta</p>
        <Rating />
        <Price />
      </div>
      <div className="card__footer text-center gap-sm">
        <button className="btn btn-default-outline  border-rounded-md">
          Move to Cart
        </button>
      </div>
    </div>
  );
};
