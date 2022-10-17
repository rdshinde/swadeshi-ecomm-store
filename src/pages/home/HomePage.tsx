import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <section className={`${styles.hero__text} text-center text-default`}>
        <div className="m-b-xxl">
          <h1>
            Designes that you love are now{" "}
            <span className="text-primary">'Swadeshi' .</span>
          </h1>
          <h3 className="m-y-md">
            Shop stunning clothes which are totally made from home grown fabric.
          </h3>

          <Link to="/products">
            <button
              className={`${styles.hero__btn} m-y-lg btn btn-default border-rounded-lg`}
            >
              Order Now
            </button>
          </Link>
        </div>
      </section>
      <section className={`${styles.categorise_container}`}>
        <div className="text-center">
          <h2 className="text-primary text-1 bold-lg">Categories</h2>
        </div>
        <div className={`${styles.categories} m-xl p-md flex-center gap-md`}>
          <button
            className={`btn ${styles.category} ${styles.category_mens} text-2 bold-xl cursor-pointer text-default border-rounded-full p-lg flex-center shadow-sm`}
            //   onClick={() => clickHandler("MEN")}
          >
            <h3>Mens</h3>
          </button>
          <button
            className={`btn ${styles.category} ${styles.category_women} text-2 bold-xl cursor-pointer text-default border-rounded-full p-lg flex-center shadow-sm`}
            //   onClick={() => clickHandler("WOMEN")}
          >
            <h3>Women</h3>
          </button>
          <button
            className={`btn ${styles.category} ${styles.category_boys} text-2 bold-xl cursor-pointer text-default border-rounded-full p-lg flex-center shadow-sm`}
            //   onClick={() => clickHandler("BOYS")}
          >
            <h3>Boys</h3>
          </button>
        </div>
      </section>
    </>
  );
};
