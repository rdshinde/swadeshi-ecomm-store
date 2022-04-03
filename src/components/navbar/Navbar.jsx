import "./navbar.css";
import cart from "../../assets/cart.svg";
import wishlist from "../../assets/wishlist.svg";
import { NavLink } from "react-router-dom";
import { useAuth, useCartAndWishlist } from "../../contexts";
import { priceAndQuantityHandler } from "../../utils/priceAndQuantityHandler";
const Navbar = () => {
  const { getTotalQuantity } = priceAndQuantityHandler();
  const { userAuthState, logoutHandler } = useAuth();
  const { cartItems, wishlistItems } = useCartAndWishlist();
  return (
    <nav className="header__nav">
      <div className="nav__logo-container">
        <NavLink to="/" className="text-default">
          <i className="fa-solid fa-store"></i>&nbsp;
          <h1>Swadeshi</h1>
          <span className="bold-lg">.com</span>
        </NavLink>
      </div>
      <div className="nav__searchbar">
        <input
          className="search-input"
          placeholder="ex. Men Kurta"
          type="search"
          id="text-input"
        />
        <div className="search-input__btn flex-center">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="nav__icons nav__icons__footer text-default">
        <div className="nav__icons-cart">
          <NavLink to="/cart">
            <div className="badge__container">
              <img className="badge__container-img" src={cart} alt="Cart" />
              {userAuthState.isUserLoggedIn &&
                getTotalQuantity(cartItems) > 0 && (
                  <div className="badge badge-top-right border-rounded-full bg-primary text-offwhite bold-xl">
                    {getTotalQuantity(cartItems)}
                  </div>
                )}
            </div>
          </NavLink>
        </div>
        <div className="nav__icons-wishlist">
          <NavLink to="/wishlist">
            <div className="badge__container">
              <img className="badge__container-img" src={wishlist} alt="Cart" />
              {userAuthState.isUserLoggedIn && wishlistItems.length > 0 && (
                <div className="badge badge-top-right border-rounded-full bg-primary text-offwhite bold-xl">
                  {wishlistItems.length}
                </div>
              )}
            </div>
          </NavLink>
        </div>
        <div className="nav__icons-login">
          {userAuthState.isUserLoggedIn ? (
            <button
              className="btn btn-default-outline border-rounded-md"
              onClick={() => logoutHandler()}
            >
              <i className="fas fa-user btn__icon"></i>Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-default-outline border-rounded-md">
                <i className="fas fa-user btn__icon"></i>Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
