import styles from "./navbar.module.css";
import { FaShoppingCart, FaHeart } from "../../services";
import { NavLink } from "react-router-dom";
const Navbar = () => {
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
          id="text-input"
        />
        <div className={`${styles.search_input__btn} flex-center`}>
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

              <div
                className={`${styles.badge} badge badge-top-right border-rounded-full bg-primary text-offwhite bold-xl`}
              >
                10
              </div>
            </div>
          </NavLink>
        </div>
        <div className={`${styles.nav__icons_wishlist}`}>
          <NavLink to="/wishlist">
            <div className={`${styles.badge__container}`}>
              <span className={`${styles.badge__container_img}`}>
                <FaHeart size={30} />
              </span>

              <div
                className={`${styles.badge} badge badge-top-right border-rounded-full bg-primary text-offwhite bold-xl`}
              >
                10
              </div>
            </div>
          </NavLink>
        </div>
        <div className={`${styles.nav__icons_login}`}>
          {/* <button
              className="btn btn-default-outline border-rounded-md"
            //   onClick={() => logoutHandler()}
            >
              <i className="fas fa-user btn__icon"></i>Logout
            </button> */}

          <NavLink to="/login">
            <button className="btn btn-default-outline border-rounded-md">
              <i className="fas fa-user btn__icon"></i>Login
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
