import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    description:
      "Different types of traditional Indian clothes for men.",
  },
  {
    _id: uuid(),
    categoryName: "women",
    description:
      "Traditional kurta for women.",
  },
  {
    _id: uuid(),
    categoryName: "boys",
    description:
      "Boys traditional clothing.",
  },
];
