import React, { useEffect, useState } from "react";
import styles from "./cart-page.module.css";
import { Link } from "react-router-dom";
import { CartItem, Loader } from "../../components";
import { useAuth, useProducts } from "../../contexts";
import { Product } from "../../contexts/products/ProductsTypesDeclaration";
import { getDiscountedPrice, getTotalPrice } from "../../utils";
export const CartPage = () => {
  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();
  const {
    isLoading,
    productState: { cart },
  } = useProducts();
  return (
    <>
      {isLoading ? <Loader /> : ""}
      <div className="cart__heading text-center m-y-md">
        <h2>My Cart</h2>
      </div>
      {isUserLoggedIn ? (
        <section className={`${styles.cart__items_container} p-md gap-lg`}>
          <div className={styles.cart__items}>
            {cart.qty
              ? cart?.products?.map((cartItem: Product, index: number) => (
                  <CartItem key={index} itemData={cartItem} />
                ))
              : ""}
          </div>
          {cart?.qty ? (
            <div className={`${styles.cart__checkout} border-rounded-sm p-md`}>
              <h3 className="text-gray text-center">Cart Summary</h3>
              <div className="divider m-y-md"></div>
              <div className="text-4 space-between bold-lg ">
                {/* Total Items <span>{getTotalQuantity(cart?.products)}</span> */}
              </div>
              <div className="text-4 space-between bold-lg m-y-md">
                Total Price
                <span>
                  &nbsp; &#8377;{Math.trunc(getTotalPrice(cart?.products))}
                </span>
              </div>
              <div className="text-4 space-between bold-lg m-y-md">
                Total Discount
                <span className="text-success">
                  &nbsp; &#8377;
                  {getTotalPrice(cart?.products) -
                    getDiscountedPrice(cart?.products)}
                </span>
              </div>
              <div className="text-4 space-between bold-lg m-y-md">
                Final Price
                <span className="">
                  &nbsp;
                  <span className={styles.strike}>
                    &#8377;{getTotalPrice(cart?.products)}
                  </span>
                  &nbsp; &#8377;{Math.trunc(getDiscountedPrice(cart?.products))}
                </span>
              </div>
              <div className="divider"></div>
              <div className="text-4 space-between bold-lg m-y-md">
                <div className={`${styles.coupon_input} input-group`}>
                  <label htmlFor="text-input" className="text-4 bold-lg">
                    Apply Coupon Code
                  </label>
                  <div className="space-between">
                    <input type="text" id="text-input" />
                    <button className="btn m-r-lg btn-secondary border-rounded-lg">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart__order-btn space-between">
                <span className="text-3 bold-lg text-dark">
                  Total Amount: &#8377;{getDiscountedPrice(cart?.products)}{" "}
                  &nbsp;
                </span>
                <Link to={"/"} className="btn btn-default border-rounded-lg">
                  Place Order
                </Link>
              </div>
            </div>
          ) : (
            ""
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
      {isUserLoggedIn && cart?.products.length === 0 && (
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
