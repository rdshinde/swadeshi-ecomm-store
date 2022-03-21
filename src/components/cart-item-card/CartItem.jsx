import "./cartItem.css";
import mensKurta from "../../assets/kurta.png";
import React from "react";
import { Rating, Price } from "../ui";
import { Link } from "react-router-dom";

export const CartItem = () => {
  return (
    <section className="cart__item border-rounded-sm">
      <div className="cart__item-info flex-center">
        <div className="item__img">
          <Link to="/products/product-details">
            <img src={mensKurta} height="150px" alt="" />
          </Link>
        </div>
        <div className="item__description m-x-lg">
          <p className="text-4 text-gray bold-lg">Raymond</p>
          <p className="text-4 bold-xl p-y-sm">Mens' Kurta</p>
          <p className="text-4 bold-lg p-b-sm">Size: Small (30cm)</p>
          <Rating />
          <Price />
        </div>
      </div>
      <div className="cart__item-actions flex-center">
        <div className="item__count">
          <div className="count__delete bg-secondary p-sm border-rounded-lg">
            <i className="fa-solid fa-minus"></i>
          </div>
          <div className="count p-sm text-4 bold-lg">2</div>
          <div className="count__add bg-secondary p-sm border-rounded-lg">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="item__price text-3 bold-lg m-x-xxl">&#8377;1998</div>
        <div className="item__delete flex-center m-r-lg">
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
    </section>
  );
};
