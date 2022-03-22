import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export const Home = () => {
  return (
    <>
      <section className="hero__text text-center text-default">
        <div className="m-b-xxl">
          <h1>
            Designes that you love are now{" "}
            <span className="text-primary">'Swadeshi' .</span>
          </h1>
          <h3 className="m-y-md">
            Shop stunning clothes which are totally made from home grown fabric.
          </h3>

          <Link to="/products">
            <button className="hero__btn m-y-lg btn btn-default border-rounded-lg">
              Order Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
