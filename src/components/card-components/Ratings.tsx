import React from "react";

type Rating = {
  rating: string;
  totalRatings: string;
};

export const Ratings = ({
  rating: { rating, totalRatings },
}: {
  rating: Rating;
}) => {
  return (
    <div className="rating">
      <div className="rating-simple border-rounded-lg  px-lg m-b-sm">
        <i className="fa fa-star rated"></i>
        <span className="bold-lg">{rating}</span>
      </div>
      <span className="text-4 text-gray bold-lg m-x-md">{totalRatings} Ratings</span>
    </div>
  );
};
