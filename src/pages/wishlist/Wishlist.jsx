import React from "react";
import { Loader, WishlistItem } from "../../components";
import { useCartAndWishlist } from "../../contexts/cart-and-wishlist/cartAndWishlistContext";

export const Wishlist = () => {
  const { wishlistItems, isLoaderLoading } = useCartAndWishlist();
  return (
    <>
      <div className="wishlist__heading text-center m-y-md">
        <h2>My Wishlist</h2>
      </div>
      {isLoaderLoading && <Loader />}
      <div className="wishlist__items-container flex-center wrap-items">
        {wishlistItems.map((item) => (
          <WishlistItem itemData={item} />
        ))}
      </div>
    </>
  );
};
