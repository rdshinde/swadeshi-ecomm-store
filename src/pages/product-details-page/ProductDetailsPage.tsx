import { Loader, ProductDetails } from "../../components";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts";
import { useEffect, useState } from "react";
import { Product } from "../../contexts/products/ProductsTypesDeclaration";
import axios from "axios";
import { Toast } from "../../utils";
import { type } from "os";

export const ProductDetailsPage = () => {
  const { isLoading } = useProducts();
  const [displayItem, setDisplayItem] = useState<Product>();
  const params = useParams();
  const id = params.id;

  const {
    productState: { wishlist, cart, allProducts },
  } = useProducts();
  const [loading, setLoading] = useState(false);
  const getProduct = async () => {
    let res: any;
    try {
      setLoading(true);
      res = await axios.get(
        `https://swadeshi-ecomm.herokuapp.com/products/${id}`
      );
    } catch (err) {
      Toast({ type: "error", message: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
    const resProduct = res.data.product[0];
    if (resProduct) {
      if (
        wishlist.products.some(
          (item: Product) => item._id === resProduct._id
        ) ||
        cart.products.some((item: Product) => item._id === resProduct._id)
      ) {
        const product = allProducts.find(
          (product: Product) => product._id === resProduct._id
        );
        setDisplayItem({ ...product });
      } else {
        setDisplayItem({ ...resProduct });
      }
    }
  };

  useEffect(() => {
    getProduct();
  }, [id, wishlist.products, cart.products]);

  return (
    <>
      {isLoading || loading ? (
        <Loader />
      ) : (
        <ProductDetails itemData={displayItem}/>
      )}
    </>
  );
};
