export const Price = ({ price: { originalPrice, discountedPrice } }) => {
  const getDiscountPercentage = (originalPrice, discountedPrice) => {
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
