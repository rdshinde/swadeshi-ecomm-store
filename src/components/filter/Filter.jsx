import React from "react";
import { useFilter } from "../../contexts/filter/FilterContext";
// import { priceFilter } from "../../contexts/filter/filterUtils";
import "./filter.css";

export const Filter = () => {
  const { filterState, filterDispatch } = useFilter();
  const {
    sortBy,
    ratingFilter,
    category,
    priceValue,
    showOutOfStock,
    showFastDelivery,
  } = filterState;
  return (
    <aside className="aside-container p-sm">
      <section className="aside__section filter-heading m-sm p-sm">
        <h2 className="bold-lg text-primary text-3">
          <i className="fa-solid fa-filter"></i> Filters
        </h2>
        <button className="btn btn-link">Clear Filters</button>
      </section>
      <div className="divider-md"></div>
      <section className="aside__section price-filter m-sm p-sm">
        <div className="flex-center sort-heading">
          <h3 className="bold-lg text-gray text-4">Sort By</h3>
          <button
            className="btn btn-link"
            onClick={(e) => {
              e.stopPropagation();
              filterDispatch({ type: "CLEAR_SORT" });
            }}
          >
            Clear
          </button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label hrmlFor="popular">
              <input
                id="popular"
                name="sort-by"
                type="radio"
                onChange={() =>
                  filterDispatch({ type: "SORT", payload: "POPULAR_PRODUCTS" })
                }
                checked={sortBy && sortBy === "POPULAR_PRODUCTS"}
              />
              Popular
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="low-to-high">
              <input
                id="low-to-high"
                name="sort-by"
                type="radio"
                onChange={() =>
                  filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
                checked={sortBy && sortBy === "LOW_TO_HIGH"}
              />
              Price Low to High
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input
                id="high-to-low"
                name="sort-by"
                type="radio"
                onChange={() =>
                  filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
                checked={sortBy && sortBy === "HIGH_TO_LOW"}
              />
              Price High to Low
            </label>
          </div>
        </div>
      </section>
      <section className="aside__section m-sm p-sm">
        <div className="flex-center sort-heading">
          <h3 className="bold-lg text-gray text-4">Price</h3>
          <button className="btn btn-link">Clear</button>
        </div>
        <div className="sort-btns">
          <div className="input-group spaced-between">
            <input
              type="range"
              min="100"
              max="10000"
              list="price-slider"
              step="100"
              className="range-input"
              onChange={(e) =>
                filterDispatch({
                  type: "SORT",
                  payload: "PRICE_SLIDER",
                  value: e.target.value,
                })
              }
              value={priceValue}
            />
            <datalist
              id="price-slider"
              className="datalist-options"
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "1rem",
              }}
            >
              <option value="100" label="100"></option>
              <option value="5000" label="5000"></option>
              <option value="10000" label="10000"></option>
            </datalist>
          </div>
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className="flex-center sort-heading">
          <h3 className="bold-lg text-gray text-4">Delivery</h3>
          <button className="btn btn-link">Clear</button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label hrmlFor="out-of-stock">
              <input
                id="out-of-stock"
                name="out-of-stock"
                type="checkbox"
                onChange={() =>
                  filterDispatch({ type: "FILTER", payload: "OUT_OF_STOCK" })
                }
                checked={showOutOfStock}
              />
              Include Out Of Stock
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="fast-delivery">
              <input
                id="fast-delivery"
                name="fast-delivery"
                type="checkbox"
                onChange={() =>
                  filterDispatch({ type: "FILTER", payload: "FAST_DELIVERY" })
                }
                checked={showFastDelivery}
              />
              Fast Delivery
            </label>
          </div>
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className="flex-center sort-heading">
          <h3 className="bold-lg text-gray text-4">Categories</h3>
          <button
            className="btn btn-link"
            onClick={(e) => {
              e.stopPropagation();
              filterDispatch({ type: "FILTER", payload: "CLEAR_CATEGORY" });
            }}
          >
            Clear
          </button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label hrmlFor="popular">
              <input
                id="popular"
                name="category"
                type="radio"
                onChange={() =>
                  filterDispatch({ type: "FILTER", payload: "SHOW_MEN" })
                }
                checked={category && category === "MEN"}
              />
              Men
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="low-to-high">
              <input
                id="low-to-high"
                name="category"
                type="radio"
                onChange={() =>
                  filterDispatch({ type: "FILTER", payload: "SHOW_WOMEN" })
                }
                checked={category && category === "WOMEN"}
              />
              Women
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input
                id="high-to-low"
                name="category"
                type="radio"
                onChange={() =>
                  filterDispatch({ type: "FILTER", payload: "SHOW_BOYS" })
                }
                checked={category && category === "BOYS"}
              />
              Children
            </label>
          </div>
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className="flex-center sort-heading">
          <h3 className="bold-lg text-gray text-4">Ratings</h3>
          <button
            className="btn btn-link"
            onClick={(e) => {
              e.stopPropagation();
              filterDispatch({
                type: "FILTER",
                payload: "CLEAR_RATING_FILTER",
              });
            }}
          >
            Clear
          </button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label hrmlFor="popular">
              <input
                id="popular"
                name="rating"
                type="radio"
                onChange={() =>
                  filterDispatch({
                    type: "FILTER",
                    payload: "RATING_MORE_THAN_FOUR",
                  })
                }
                checked={
                  ratingFilter && ratingFilter === "RATING_MORE_THAN_FOUR"
                }
              />
              4 Stars and Above
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="popular">
              <input
                id="popular"
                name="rating"
                type="radio"
                onChange={() =>
                  filterDispatch({
                    type: "FILTER",
                    payload: "RATING_MORE_THAN_THREE",
                  })
                }
                checked={
                  ratingFilter && ratingFilter === "RATING_MORE_THAN_THREE"
                }
              />
              3 Stars and Above
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="low-to-high">
              <input
                id="low-to-high"
                name="rating"
                type="radio"
                onChange={() =>
                  filterDispatch({
                    type: "FILTER",
                    payload: "RATING_MORE_THAN_TWO",
                  })
                }
                checked={
                  ratingFilter && ratingFilter === "RATING_MORE_THAN_TWO"
                }
              />
              2 Stars and Above
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input
                id="high-to-low"
                name="rating"
                type="radio"
                onChange={() =>
                  filterDispatch({
                    type: "FILTER",
                    payload: "RATING_MORE_THAN_ONE",
                  })
                }
                checked={
                  ratingFilter && ratingFilter === "RATING_MORE_THAN_ONE"
                }
              />
              1 Star and Above
            </label>
          </div>
        </div>
      </section>
    </aside>
  );
};
