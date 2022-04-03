export const Rating = ({ rating: { rating, totalRatings } }) => {
  return (
    <div className="rating">
      <div className="rating-simple border-rounded-lg  px-lg m-b-sm">
        <i className="fa fa-star rated"></i>
        <span className="bold-lg">{rating}</span>
      </div>
      <p className="text-4 text-gray bold-lg m-x-md">{totalRatings} Ratings</p>
    </div>
  );
};
