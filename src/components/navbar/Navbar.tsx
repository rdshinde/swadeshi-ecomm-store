import styles from "./navbar.module.css";
import {
  FaShoppingCart,
  FaHeart,
  AiOutlineLogout,
  FaUserAlt,
} from "../../services";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, useFilter, useProducts } from "../../contexts";
import { useEffect, useState } from "react";
const Navbar = () => {
  const {
    productState: { cart, wishlist },
  } = useProducts();
  const { userAuthState, logoutHandler } = useAuth();
  const { isUserLoggedIn } = userAuthState;
  const [searchText, setSearchText] = useState("");
  
  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    searchHandler();
  }, [searchText]);

  const navigate = useNavigate();
  const searchHandler = () => {
    navigate(`/products`);
    filterDispatch({ type: "SEARCH_PRODUCTS", payload: searchText });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };
  const { filterDispatch } = useFilter();
  return (
    <nav className={`${styles.header__nav}`}>
      <div className={`${styles.nav__logo_container}`}>
        <NavLink to="/" className={`${styles.heading} text-default`}>
          <i className="fa-solid fa-store"></i>&nbsp;
          <h1>Swadeshi</h1>
          <span className="bold-lg">.com</span>
        </NavLink>
      </div>
      <div className={`${styles.nav__searchbar}`}>
        <input
          className="search-input"
          placeholder="ex. Men Kurta"
          type="search"
          onChange={searchInputHandler}
          onKeyDown={handleKeyDown}
          id="text-input"
          value={searchText}
        />
        <div
          className={`${styles.search_input__btn} flex-center`}
          role={`button`}
          onClick={searchHandler}
        >
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div
        className={`${styles.nav__icons} ${styles.nav__icons__footer} text-default`}
      >
        <div className={`${styles.nav__icons_cart}`}>
          <NavLink to="/cart">
            <div className={`${styles.badge__container}`}>
              <span className={`${styles.badge__container_img}`}>
                <FaShoppingCart size={30} />
              </span>

              {cart?.qty ? (
                <div
                  className={`${styles.badge} badge badge-top-right border-rounded-full bg-primary text-offwhite bold-xl`}
                >
                  {cart?.qty}
                </div>
              ) : (
                ""
              )}
            </div>
          </NavLink>
        </div>
        <div className={`${styles.nav__icons_wishlist}`}>
          <NavLink to="/wishlist">
            <div className={`${styles.badge__container}`}>
              <span className={`${styles.badge__container_img}`}>
                <FaHeart size={30} />
              </span>

              {wishlist?.qty ? (
                <div
                  className={`${styles.badge} badge badge-top-right border-rounded-full bg-primary text-offwhite bold-xl`}
                >
                  {wishlist?.qty}
                </div>
              ) : (
                ""
              )}
            </div>
          </NavLink>
        </div>
        <div className={`${styles.nav__icons_login}`}>
          {isUserLoggedIn ? (
            <button
              className="btn btn-default-outline border-rounded-md"
              onClick={() => logoutHandler()}
            >
              <span>
                <AiOutlineLogout />
              </span>
              &nbsp; Logout
            </button>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-default-outline border-rounded-md">
                <FaUserAlt />
                &nbsp; Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
