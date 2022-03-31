import React from "react";
import { useEffect, useState } from "react";
import { ProductDetails } from "../../components";
import { useLocation } from "react-router-dom";
import { useAxios } from "../../utils/useAxios";

export const ProductDetailsPage = () => {
  const location = useLocation();
  const item = { ...location.state };
  return (
    <>
      <ProductDetails itemData={item} />
    </>
  );
};
