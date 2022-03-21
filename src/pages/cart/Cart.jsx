import React from "react";
import "./cart.css";
import { CartItem } from "../../components";
export const Cart = () => {
  return (
    <>
      <div className="cart__heading text-center m-y-md">
        <h2>My Cart</h2>
      </div>
      <section className="cart__items-container p-md gap-lg">
        <div className="cart__items">
          <CartItem />
        </div>

        <div className="cart__checkout border-rounded-sm p-md">
          <h3 className="text-gray text-center">Cart Summary</h3>
          <div className="divider m-y-md"></div>
          <div className="text-4 space-between bold-lg ">
            Total Items <span>1</span>
          </div>
          <div className="text-4 space-between bold-lg m-y-md">
            Total Price <span>&#8377;2998</span>
          </div>
          <div className="text-4 space-between bold-lg m-y-md">
            Total Discount <span className="text-success">-&#8377;999</span>
          </div>
          <div className="text-4 space-between bold-lg m-y-md">
            Final Price <span className="">&#8377;1998</span>
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
              Total Amount: &#8377;1998
            </span>
            <button className="btn btn-default border-rounded-lg">
              Place Order
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
