import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WishlistItem } from "../../components";
import { useAuth, useProducts } from "../../contexts";
import { Product } from "../../contexts/products/ProductsTypesDeclaration";

export const WishlistPage = () => {
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);

  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();
  const {
    productState: { wishlist },
  } = useProducts();

  useEffect(() => {
    setWishlistProducts([...wishlist.products]);
  }, [wishlist, isUserLoggedIn]);

  return (
    <>
      <div className="wishlist__heading text-center m-y-md">
        <h2>My Wishlist</h2>
      </div>
      {isUserLoggedIn ? (
        <div className="wishlist__items-container flex-center wrap-items">
          {wishlistProducts?.map((item: Product) => (
            <WishlistItem itemData={item} />
          ))}
          {wishlist?.qty ? (
            <div className="text-center">
              <h3>Your Wishlist is empty.</h3>
              <div className="m-xl">
                <Link to={"/products"}>
                  <button className="btn btn-default-outline border-rounded-lg">
                    Go to Products
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="text-center">
          <h3>Please Login to access wishlist functionality.</h3>
          <div className="m-xl">
            <Link to={"/login"}>
              <button className="btn btn-default-outline border-rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
