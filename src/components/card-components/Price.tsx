import React from "react";
import styles from "./card-components.module.css";
type Price = {
  originalPrice: string;
  discountedPrice: string;
};

export const Price = ({
  price: { originalPrice, discountedPrice },
}: {
  price: Price;
}) => {
  const getDiscountPercentage = (
    originalPrice: string,
    discountedPrice: string
  ): number => {
    let originalPriceNum: number = Number(originalPrice);
    let discountedPriceNum: number = Number(originalPrice);
    return Math.round(
      ((originalPriceNum - discountedPriceNum) / originalPriceNum) * 100
    );
  };
  return (
    <div className="card-price m-t-sm bold-lg text-3 m-b-sm">
      <span> &#8377;{discountedPrice} </span>
      <span className={styles.strike}> &#8377;{originalPrice}</span> &nbsp;
      <span className="text-success text-4 bold-lg">
        {getDiscountPercentage(originalPrice, discountedPrice)}% Off
      </span>
    </div>
  );
};
