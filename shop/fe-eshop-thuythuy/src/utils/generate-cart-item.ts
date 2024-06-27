// import isEmpty from "lodash/isEmpty";
import { Product } from "../framework/basic-rest/types";

interface Item {
  id: string | number;
  name: string;
  image: string;
  price: number;
  slug: string;
  sale_price?: number;
  [key: string]: unknown;
}
export function generateCartItem(item: Product,attributes: object): Item {
  const { id, product_name,slug, image, list_price } = item;
  return {
    // id: !isEmpty(attributes)
    // ? `${id}.${Object.values(attributes).join(".")}`
    // : id,
    id: id,
    name: product_name,
    slug,
    image: image,
    price: list_price,
    attributes,
  };
}
