import React from "react";

type Price = {
  originalPrice: number;
  discountedPrice: number;
};

export const Price = ({
  price: { originalPrice, discountedPrice },
}: {
  price: Price;
}) => {
  const getDiscountPercentage = (
    originalPrice: number,
    discountedPrice: number
  ): number => {
    return Math.round(
      ((originalPrice - discountedPrice) / originalPrice) * 100
    );
  };
  return (
    <div className="card-price m-t-sm bold-lg text-3 m-b-sm">
      <span> &#8377;{discountedPrice} </span>
      <span className="strike"> &#8377;{originalPrice}</span> &nbsp;
      <span className="text-success text-4 bold-lg">
        {getDiscountPercentage(originalPrice, discountedPrice)}% Off
      </span>
    </div>
  );
};
