import React from "react";
import "./filter.css";
export const Filter = () => {
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
          <button className="btn btn-link">Clear</button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label hrmlFor="popular">
              <input id="popular" name="sort-by" type="radio" />
              Popular
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="low-to-high">
              <input id="low-to-high" name="sort-by" type="radio" />
              Price Low to High
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input id="high-to-low" name="sort-by" type="radio" />
              Price High to Low
            </label>
          </div>
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className="flex-center sort-heading">
          <h3 className="bold-lg text-gray text-4">Price</h3>
          <button className="btn btn-link">Clear</button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label hrmlFor="popular">
              <input id="popular" name="price-sort" type="checkbox" />
              Below &nbsp; &#8377;100
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="low-to-high">
              <input id="low-to-high" name="price-sort" type="checkbox" />
              &#8377;100 &nbsp;to&nbsp; &#8377;500
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input id="high-to-low" name="price-sort" type="checkbox" />
              &#8377;501 &nbsp;to&nbsp; &#8377;1000
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input id="high-to-low" name="price-sort" type="checkbox" />
              &#8377;1001 &nbsp;to&nbsp; &#8377;5000
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input id="high-to-low" name="price-sort" type="checkbox" />
              Above &nbsp; &#8377;5000
            </label>
          </div>
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className="flex-center sort-heading">
          <h3 className="bold-lg text-gray text-4">Categories</h3>
          <button className="btn btn-link">Clear</button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label hrmlFor="popular">
              <input id="popular" name="category" type="checkbox" />
              Men
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="low-to-high">
              <input id="low-to-high" name="category" type="checkbox" />
              Women
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input id="high-to-low" name="category" type="checkbox" />
              Children
            </label>
          </div>
        </div>
      </section>
      <section className="aside__section price-filter m-sm p-sm">
        <div className="flex-center sort-heading">
          <h3 className="bold-lg text-gray text-4">Ratings</h3>
          <button className="btn btn-link">Clear</button>
        </div>
        <div className="sort-btns">
          <div className="input-group">
            <label hrmlFor="popular">
              <input id="popular" name="rating" type="radio" />4 Stars and Above
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="popular">
              <input id="popular" name="rating" type="radio" />3 Stars and Above
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="low-to-high">
              <input id="low-to-high" name="rating" type="radio" />2 Stars and
              Above
            </label>
          </div>
          <div className="input-group">
            <label hrmlFor="high-to-low">
              <input id="high-to-low" name="rating" type="radio" />1 Star and
              Above
            </label>
          </div>
        </div>
      </section>
    </aside>
  );
};
