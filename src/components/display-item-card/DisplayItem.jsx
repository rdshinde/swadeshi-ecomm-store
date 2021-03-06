import "./displayItem.css";
import "../../stylesheets/utility.css";
import { Link, useNavigate } from "react-router-dom";
import { Rating, Price } from "../ui";
import { useAuth, useCartAndWishlist } from "../../contexts";
import { addToHandler, findItemInCartAndWishlist } from "../../utils";
export const DisplayItem = ({ itemData }) => {
  const {
    _id,
    imgUrl,
    name,
    make,
    description,
    originalPrice,
    discountedPrice,
    rating,
    totalRatings,
    isAvailable,
    isFastDelivery,
  } = itemData;
  const navigate = useNavigate();
  const { userAuthState } = useAuth();
  const { isUserLoggedIn } = userAuthState;
  const { cartItems, wishlistItems, cartAndWishlistDispatch } =
    useCartAndWishlist();

  const { isItemWishlisted, isItemInCart } = findItemInCartAndWishlist(
    wishlistItems,
    cartItems
  );
  const { addToWishListHandler, AddtoCartHandler } = addToHandler(
    isUserLoggedIn,
    cartAndWishlistDispatch,
    navigate,
    isItemWishlisted
  );
  return (
    <div
      className={`card display-card border-rounded-sm cursor-pointer p-x-md ${
        !isAvailable && "out-of-stock"
      }`}
      description={description}
    >
      <button
        className={`btn card__wishlist ${
          isItemWishlisted(_id) ? "text-danger" : "text-gray"
        } p-sm`}
        onClick={(e) => addToWishListHandler(e, itemData)}
      >
        <i className="fa-solid fa-heart"></i>
      </button>
      <div className="card__body m-b-md">
        <div className="card__img-container flex-center">
          <Link to={`/products/details`} state={{ ...itemData }}>
            <img width="180" height="420" src={imgUrl} alt="kurta" />
          </Link>
        </div>
        <p className="text-4 text-gray bold-lg">{make}</p>
        <p className="text-4 bold-xl text-start">{name}</p>
        <Rating rating={{ rating, totalRatings }} />
        <Price price={{ originalPrice, discountedPrice }} />
        {isFastDelivery ? (
          <span className="fast-delivery">
            <i className="fa-solid fa-truck-fast text-5 text-primary">
              &nbsp; Fast Delivery
            </i>
          </span>
        ) : (
          <span className="fast-delivery">
            <i className="fa-solid fa-truck text-5 text-gray">
              &nbsp;Regular Delivery
            </i>
          </span>
        )}
      </div>
      <div className="card__footer text-center gap-sm">
        {isItemInCart(_id) ? (
          <Link
            className="btn btn-default-outline  border-rounded-md"
            to={"/cart"}
          >
            Go to Cart
          </Link>
        ) : (
          <button
            className="btn btn-default-outline  border-rounded-md"
            onClick={(e) => AddtoCartHandler(e, itemData)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
