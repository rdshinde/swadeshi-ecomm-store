import React from "react";
import { useFilter } from "../../contexts";
import { FilterActions } from "../../contexts/filter/filterTypesDeclaration";
import styles from "./filter.module.css";
export const Filter = () => {
  const { filterState, filterDispatch } = useFilter();
  const {
    showOutOfStock,
    showFastDelivery,
    category,
    ratings,
    sortBy,
    priceValue,
  } = filterState;
  return (
    <aside className="aside-container p-sm">
      <section className={`aside__section ${styles.filter_heading} m-sm p-sm`}>
        <h2 className="bold-lg text-primary text-3">
          <i className="fa-solid fa-filter"></i> Filters
        </h2>
        <button
          className="btn btn-link"
          onClick={() => {
            filterDispatch({
              type: FilterActions.CLEAR_ALL_FILTERS,
            });
          }}
        >
          Clear Filters
        </button>
      </section>
      <div className="divider-md"></div>
      <section className="aside__section price-filter m-sm p-sm">
        <div className={`flex-center ${styles.sort_heading}`}>
          <h3 className="bold-lg text-gray text-4">Sort By</h3>
          <button
            className="btn btn-link"
            onClick={() => {
              filterDispatch({
                type: FilterActions.CLEAE_SORT_FILTER,
              });
            }}
          >
            Clear
          </button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label htmlFor="popular">
              <input
                id="popular"
                name="sort-by"
                type="radio"
                onChange={() =>
                  filterDispatch({
                    type: FilterActions.SORT_POPULAR_PRODUCTS,
                  })
                }
                checked={sortBy && sortBy === "POPULAR_PRODUCTS"}
              />
              Popular
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="low-to-high">
              <input
                id="low-to-high"
                name="sort-by"
                type="radio"
                onChange={() =>
                  filterDispatch({
                    type: FilterActions.SORT_BY_PRICE_LOW_TO_HIGH,
                  })
                }
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              />
              Price Low to High
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="high-to-low">
              <input
                id="high-to-low"
                name="sort-by"
                type="radio"
                onChange={() =>
                  filterDispatch({
                    type: FilterActions.SORT_BY_PRICE_HIGH_TO_LOW,
                  })
                }
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              />
              Price High to Low
            </label>
          </div>
        </div>
      </section>
      <section className="aside__section m-sm p-sm">
        <div className={`flex-center ${styles.sort_heading}`}>
          <h3 className="bold-lg text-gray text-4">Price</h3>
          <button
            className="btn btn-link"
            onClick={(e) => {
              filterDispatch({
                type: FilterActions.CLEAR_PRICE_FILTER,
              });
            }}
          >
            Clear
          </button>
        </div>
        <div className="sort-btns">
          <div className="input-group spaced-between">
            <input
              type="range"
              min="100"
              max="5000"
              list="price-slider"
              step="100"
              className={styles.range_input}
              onChange={(e) =>
                filterDispatch({
                  type: FilterActions.FILER_BY_PRICE_RANGE,
                  payload: e.target.value,
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
              <option value="2500" label="2500"></option>
              <option value="5000" label="5000"></option>
            </datalist>
          </div>
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className={`flex-center ${styles.sort_heading}`}>
          <h3 className="bold-lg text-gray text-4">Delivery</h3>
          <button
            className="btn btn-link"
            onClick={() => {
              filterDispatch({
                type: FilterActions.CLEAR_DELIVERY_FILTER,
              });
            }}
          >
            Clear
          </button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label htmlFor="out-of-stock">
              <input
                id="out-of-stock"
                name="out-of-stock"
                type="checkbox"
                onChange={(e) =>
                  filterDispatch({ type: FilterActions.OUT_OF_STOCK })
                }
                checked={showOutOfStock}
              />
              Include Out Of Stock
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="fast-delivery">
              <input
                id="fast-delivery"
                name="fast-delivery"
                type="checkbox"
                onChange={() =>
                  filterDispatch({ type: FilterActions.FAST_DELIVERY })
                }
                checked={showFastDelivery}
              />
              Fast Delivery
            </label>
          </div>
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className={`flex-center ${styles.sort_heading}`}>
          <h3 className="bold-lg text-gray text-4">Categories</h3>
          <button
            className="btn btn-link"
            onClick={() => {
              filterDispatch({ type: FilterActions.CLEAR_CATEGORY_FILTER });
            }}
          >
            Clear
          </button>
        </div>
        <div className="sort-btns">
          {[
            { displayName: "Men", categoryName: "MEN" },
            { displayName: "Women", categoryName: "WOMEN" },
            { displayName: "Boys", categoryName: "BOYS" },
          ].map(({ displayName, categoryName }) => {
            return (
              <div className="input-group">
                <label htmlFor="popular">
                  <input
                    id="popular"
                    name="category"
                    type="radio"
                    onChange={() =>
                      filterDispatch({
                        type: "SET_CATEGORY_FILTER",
                        payload: `${categoryName}`,
                      })
                    }
                    checked={category && category === categoryName}
                  />
                  {displayName}
                </label>
              </div>
            );
          })}
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className={`flex-center ${styles.sort_heading}`}>
          <h3 className="bold-lg text-gray text-4">Ratings</h3>
          <button
            className="btn btn-link"
            onClick={() => {
              filterDispatch({
                type: FilterActions.CLEAR_RATING_FILTER,
              });
            }}
          >
            Clear
          </button>
        </div>
        <div className="sort-btns">
          {[
            { ratingNum: 1 },
            { ratingNum: 2 },
            { ratingNum: 3 },
            { ratingNum: 4 },
          ].map(({ ratingNum }) => {
            return (
              <div className="input-group">
                <label htmlFor="popular">
                  <input
                    id="popular"
                    name="rating"
                    type="radio"
                    onChange={() =>
                      filterDispatch({
                        type: FilterActions.SET_RATING_FILTER,
                        payload: ratingNum,
                      })
                    }
                    checked={ratings && ratings === ratingNum}
                  />
                  {ratingNum} Stars and Above
                </label>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
};
