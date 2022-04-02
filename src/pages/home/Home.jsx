import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/filter/FilterContext";
import { Toast } from "../../utils/toast";
export const Home = () => {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();
  const clickHandler = (category) => {
    navigate("/products");
    let setTimeoutID = setTimeout(() => {
      filterDispatch({
        type: "FILTER",
        payload: `SHOW_${category}`,
      });
      Toast({ type: "success", msg: `${category}s' products filtered.` });
    }, 0);
    return () => clearTimeout(setTimeoutID);
  };
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
      <section className="categorise-container">
        <div className="text-center">
          <h2 className="text-primary text-1 bold-lg">Categories</h2>
        </div>
        <div class="categories m-xl p-md flex-center gap-md">
          <button
            class="btn category category-mens text-2 bold-xl cursor-pointer text-default border-rounded-full p-lg flex-center shadow-sm"
            onClick={() => clickHandler("MEN")}
          >
            <h3>Mens</h3>
          </button>
          <button
            class="btn category category-women text-2 bold-xl cursor-pointer text-default border-rounded-full p-lg flex-center shadow-sm"
            onClick={() => clickHandler("WOMEN")}
          >
            <h3>Women</h3>
          </button>
          <button
            class="btn category category-boys text-2 bold-xl cursor-pointer text-default border-rounded-full p-lg flex-center shadow-sm"
            onClick={() => clickHandler("BOYS")}
          >
            <h3>Boys</h3>
          </button>
        </div>
      </section>
    </>
  );
};
