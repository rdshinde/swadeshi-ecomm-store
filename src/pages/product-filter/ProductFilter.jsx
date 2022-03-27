import { React, useState } from "react";
import { DisplayItem, Loader } from "../../components";
import { Filter } from "../../components/filter/Filter";
import { useFilter } from "../../contexts/filter/FilterContext";
import "./productFilter.css";
import NoItems from "../../assets/NoItems.jpg";
export const ProductFilter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { sortedProducts, isLoaderLoading, isErrorOccured } = useFilter();
  return (
    <div className="main gap-md">
      {(isErrorOccured || isLoaderLoading) && <Loader />}
      <div
        className={`aside-wrapper ${
          !showFilters ? "hide-filter" : "show-filter"
        }`}
      >
        <Filter />
      </div>
      <div className="main-wrapper">
        <div className="filter-btn text-end m-x-md ">
          <button
            className="btn btn-primary m-y-md border-rounded-lg"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <i className="fa-solid fa-filter"></i> Filters
          </button>
        </div>

        <main
          className="main-container p-md"
          onClick={() =>
            setShowFilters((prev) => (prev === false ? false : false))
          }
        >
          <div className="text-start">
            <h2 className="search-result m-l-lg text-2 bold-lg text-gray">
              Search Result
              <span className="text-3 bold-lg">
                ({sortedProducts.length} items)
              </span>
            </h2>
          </div>
          <div
            className={`cards-container gap-md ${
              sortedProducts.length === 0 && "flex-center"
            }`}
          >
            {sortedProducts.length === 0 && (
              <div className="flex-center">
                <div>
                  <img
                    src={NoItems}
                    className="img-responsive"
                    width="1080"
                    height="1080"
                    alt="NoItems"
                  />
                </div>
              </div>
            )}
            {sortedProducts.map(
              (item) => (
                <DisplayItem
                  key={item._id}
                  itemData={item}
                />
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
