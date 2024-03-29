import React from "react";
import { useState } from "react";
import { DisplayItem, Filter, Loader } from "../../components";
import { useFilter, useProducts } from "../../contexts";
import { Product } from "../../contexts/products/ProductsTypesDeclaration";
import styles from "./filter-page.module.css";

export const FilterPage = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const { isLoading } = useProducts();
  const { sortedProducts, filterState } = useFilter();
  return (
    <>
      {isLoading && <Loader />}
      <div className={`${styles.main} gap-md`}>
        <div
          className={`${styles.aside_wrapper} ${
            !showFilters ? styles.hide_filter : styles.show_filter
          }`}
        >
          <Filter />
        </div>
        <div className={styles.main_wrapper}>
          <div className={`${styles.filter_btn} text-end m-x-md`}>
            <button
              className="btn btn-primary m-y-md border-rounded-lg"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              <i className="fa-solid fa-filter"></i> Filters
            </button>
          </div>

          <main
            className={`${styles.main_container} p-md`}
            onClick={() =>
              setShowFilters((prev) => (prev === false ? false : false))
            }
          >
            <div className="text-start">
              <h2 className="search-result m-l-lg text-2 bold-lg text-gray">
                {filterState.searchValue ? (
                  <span>
                    Search Result for <em>"{filterState.searchValue}"</em>
                  </span>
                ) : (
                  "Search Result"
                )}
                <span className="text-3 bold-lg">
                  {/* ({sortedProducts.length} items) */}
                </span>
              </h2>
            </div>
            <div
              className={`${styles.cards_container} gap-md ${
                sortedProducts.length === 0 && "flex-center"
              }`}
            >
              {sortedProducts?.length === 0 && (
                <div className="flex-center">
                  <div>
                    <img
                      src="public/assets/NoItems.jpg"
                      className="img-responsive"
                      width="1080"
                      height="1080"
                      alt="NoItems"
                    />
                  </div>
                </div>
              )}
              {sortedProducts?.map((item: Product, index: number) => (
                <DisplayItem key={index} itemData={item} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
