import React from "react";
import styles from "./page-not-found.module.css";
export const PageNotFound = () => {
  return (
    <div className={`${styles.error__text} flex-center`}>
      <h1 className="text-danger">Error 404</h1>
      <h2 className="text-warning">Page Not Found!</h2>
      <h3>You are on wrong page address.</h3>
      <button className="btn btn-primary m-y-md border-rounded-lg">
        Go to Home
      </button>
    </div>
  );
};
