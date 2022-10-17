import { Product } from "../contexts/products/ProductsTypesDeclaration";

export const categoryFilter = () => {};

export const searchProducts = (searchValue: string, products: Product[]) => {
  return products.filter((product) => {
    return (
      product.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.make.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
};

export const showOutOfStockProducts = (
  showOutOfStock: boolean,
  products: Product[]
) => {
  return products.filter((product) => {
    return showOutOfStock ? product.isAvailable : product;
  });
};

export const getFastDeliveryProducts = (
  showFastDelivery: boolean,
  products: Product[]
) => {
  return products.filter((product) =>
    showFastDelivery ? product.isFastDelivery : product
  );
};

export const getSortedByCategoryProducts = (
  category: string,
  products: Product[]
) => {
  return products.filter((product) => {
    return category
      ? product.categoryName?.toLocaleLowerCase() ===
          category.toLocaleLowerCase()
      : product;
  });
};

export const getFilteredByRatingProducts = (
  rating: number | null,
  products: Product[]
) => {
  if (rating) {
    return products.filter((product) => {
      return Number(product.rating) >= Number(rating);
    });
  } else {
    return products;
  }
};

export const getfilteredByPrice = (
  price: number | null,
  products: Product[]
) => {
  if (price) {
    return products.filter((product) => {
      return Number(product.originalPrice) <= Number(price);
    });
  } else {
    return products;
  }
};

export const getSortedProducts = (sortBy: string, products: Product[]) => {
  return products.sort((product1, product2): any => {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return Number(product1.originalPrice) - Number(product2.originalPrice);
    } else if (sortBy === "PRICE_HIGH_TO_LOW") {
      return Number(product2.originalPrice) - Number(product1.originalPrice);
    } else if (sortBy === "POPULAR_PRODUCTS") {
      return Number(product2.rating) - Number(product1.rating);
    } else {
      return products;
    }
  });
};
