import { ProductDetails } from "../../components";
import { useLocation } from "react-router-dom";

export const ProductDetailsPage = () => {
  const location = useLocation();
  const item = { ...location.state };
  return (
    <>
      <ProductDetails itemData={item} />
    </>
  );
};
