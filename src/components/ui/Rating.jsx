import React from "react";

export const Rating = () => {
  return (
    <div className="rating">
      <div className="rating-simple border-rounded-lg  px-lg m-b-sm">
        <i className="fa fa-star rated"></i>
        <span className="bold-lg">4.5</span>
      </div>
      <p className="text-4 text-gray bold-lg m-x-md">1,999 Ratings</p>
    </div>
  );
};
