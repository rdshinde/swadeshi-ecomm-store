import { Product } from "../contexts/products/ProductsTypesDeclaration";

export const getTotalPrice = (cartItems: Product[] | any) => {
  if (cartItems) {
    return cartItems.reduce((acc: number, curr: { originalPrice: any; quantitiesInCart: number; }) => {
      return (acc =
        acc + Number(Number(curr.originalPrice) * curr.quantitiesInCart));
    }, 0);
  }
};

export const getDiscountedPrice = (cartItems: Product[] | any) => {
  if (cartItems) {
    return cartItems.reduce((acc: number, curr: { discountedPrice: any; quantitiesInCart: number; }):number => {
      return (acc =
        acc + Number(Number(curr.discountedPrice) * curr.quantitiesInCart));
    }, 0);
  }
};
