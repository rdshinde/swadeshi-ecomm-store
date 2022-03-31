import React from "react";
import "./cart.css";
import { CartItem } from "../../components";
import { useAuth } from "../../contexts/auth/authContext";
import { Link } from "react-router-dom";
import { useCartAndWishlist } from "../../contexts/cart-and-wishlist/cartAndWishlistContext";
import { priceAndQuantityHandler } from "../../utils/priceAndQuantityHandler";
export const Cart = () => {
  const { userAuthState } = useAuth();
  const { isUserLoggedIn } = userAuthState;
  const { cartItems } = useCartAndWishlist();

  const { getTotalQuantity, getTotalPrice, getDiscountedPrice } =
    priceAndQuantityHandler();
  return (
    <>
      <div className="cart__heading text-center m-y-md">
        <h2>My Cart</h2>
      </div>
      {isUserLoggedIn ? (
        <section className="cart__items-container p-md gap-lg">
          <div className="cart__items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem._id} itemData={cartItem} />
            ))}
          </div>
          {cartItems.length && (
            <div className="cart__checkout border-rounded-sm p-md">
              <h3 className="text-gray text-center">Cart Summary</h3>
              <div className="divider m-y-md"></div>
              <div className="text-4 space-between bold-lg ">
                Total Items <span>{getTotalQuantity(cartItems)}</span>
              </div>
              <div className="text-4 space-between bold-lg m-y-md">
                Total Price
                <span>&#8377;{Math.trunc(getTotalPrice(cartItems))}</span>
              </div>
              <div className="text-4 space-between bold-lg m-y-md">
                Total Discount
                <span className="text-success">
                  -&#8377;
                  {getTotalPrice(cartItems) - getDiscountedPrice(cartItems)}
                </span>
              </div>
              <div className="text-4 space-between bold-lg m-y-md">
                Final Price
                <span className="">
                  &#8377;{Math.trunc(getDiscountedPrice(cartItems))}
                </span>
              </div>
              <div className="divider"></div>
              <div className="text-4 space-between bold-lg m-y-md">
                <div className="input-group">
                  <label htmlFor="text-input" className="text-4 bold-lg">
                    Add Coupon Code
                  </label>
                  <div className="space-between">
                    <input type="text" id="text-input" />
                    <button className="btn m-x-lg btn-secondary border-rounded-lg">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart__order-btn space-between">
                <span className="text-3 bold-lg text-dark">
                  Total Amount: &#8377;{getDiscountedPrice(cartItems)}
                </span>
                <button className="btn btn-default border-rounded-lg">
                  Place Order
                </button>
              </div>
            </div>
          )}
        </section>
      ) : (
        <div className="text-center">
          <h3>Please Login to access cart functionality.</h3>
          <div className="m-xl">
            <Link to={"/login"}>
              <button className="btn btn-default-outline border-rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
      {cartItems.length === 0 && (
        <div className="text-center">
          <h3>Your Cart is empty.</h3>
          <div className="m-xl">
            <Link to={"/products"}>
              <button className="btn btn-default-outline border-rounded-lg">
                Go to Products
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
