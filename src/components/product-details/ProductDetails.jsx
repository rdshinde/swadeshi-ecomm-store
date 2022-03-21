import React from "react";
import "./productDetails.css";
import { Price, Rating } from "..";
import ImageZoom from "react-image-zooom";
export const ProductDetails = () => {
  return (
    <section className="product__details-wrapper border-rounded-sm">
      <div className="product__img flex-center">
        <ImageZoom
          src="https://rukminim2.flixcart.com/image/880/1056/kmi2g7k0/kurta/4/k/i/m-p-kurta-yellow-nancy-enterprise-original-imagfe3gtsebg7ac.jpeg?q=50"
          alt="A image to apply the ImageZoom plugin"
          zoom="200"
          className="img-zoom"
          height="800px"
        />
        <div className="card__wishlist text-gray p-sm">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
      <div className="product__details">
        <div className="product__name">
          <p className="text-3 bold-lg text-gray">Raymond</p>
          <h2>Men Solid Cotton Blend Straight Kurta (Yellow)</h2>
        </div>
        <Rating />
        <div className="m-y-md"></div>
        <Price />
        <div className="m-y-md"></div>
        <div className="size-chart gap-md">
          <span className="text-3 bold-lg m-r-md">Size Chart: </span>
          <button className="btn btn-secondary-outline">S</button>
          <button className="btn btn-secondary-outline">L</button>
          <button className="btn btn-secondary-outline">XL</button>
          <button className="btn btn-secondary-outline">XXL</button>
          <button className="btn btn-secondary-outline">3XL</button>
        </div>
        <div className="action-buttons m-y-lg m-md">
          <button className="btn btn-danger-outline m-r-md">
            Add to Wishlist
          </button>
          <button className="btn btn-danger">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};
