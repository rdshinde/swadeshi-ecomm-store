import React from "react";
import { WishlistItem } from "../../components";

export const Wishlist = () => {
  return (
    <>
      <div className="wishlist__heading text-center m-y-md">
        <h2>My Wishlist</h2>
      </div>
      <div className="wishlist__items-container flex-center wrap-items">
        <WishlistItem />
      </div>
    </>
  );
};
